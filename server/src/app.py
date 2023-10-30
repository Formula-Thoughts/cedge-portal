import json
import os

import openai


def lambda_handler(event, context):
    default_headers = {
        'Content-Type': 'application/json'
    }
    try:
        job_listing_json = json.loads(event['body'])

        openai.api_key = os.getenv("OPENAI_API_KEY")

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": "You are a helpful assistant, that processes html-based content job listings "
                               "for potential job applications writing their CV"
                },
                {
                    "role": "assistant", "name": "example_response_format_schema",
                    "content": "{\"summaries\": [\"SUMMARY 1\", \"SUMMARY 2\", \"SUMMARY 3\"]}"
                },
                {
                    "role": "user",
                    "content": f"take this job listing: \"{job_listing_json['content']}\" and write 3 summaries an "
                               f"applicant might use for their cv following the json "
                               f"schema provided, and only return the json"
                }
            ],
            temperature=0.5
        )

        return {
            'statusCode': 200,
            'body': response['choices'][0]['message']['content'],
            'headers': default_headers
        }
    except Exception as e:
        print(f"error occurred {e}")

        return {
            'statusCode': 500,
            'body': '{\'message\': \'internal server error :(\'}',
            'headers': default_headers
        }
