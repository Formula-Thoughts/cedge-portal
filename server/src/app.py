import json
import os

import openai
from openai import InvalidRequestError


def lambda_handler(event, context):
    default_headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
    }
    try:
        job_listing_json = json.loads(event['body'])

        openai.api_key = os.getenv("OPENAI_API_KEY")

        if 'content' not in job_listing_json:
            return {
                'statusCode': 400,
                'body': '{\"message\": \"missing required field: content\"}',
                'headers': default_headers
            }

        try:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {
                        "role": "system",
                        "content": "You are a helpful assistant, that processes job listings "
                                   "for potential job applications writing their CV"
                    },
                    {
                        "role": "user", "name": "example_response_format_schema",
                        "content": "give me a json schema for formatting job applicant's cv summaries"
                    },
                    {
                        "role": "assistant", "name": "example_response_format_schema",
                        "content": "{\"summaries\": [\"SUMMARY 1\", \"SUMMARY 2\", \"SUMMARY 3\"]}"
                    },
                    {
                        "role": "user",
                        "content": f"take this job listing: \"{job_listing_json['content']}\" and write 3 summaries a "
                                   f"job applicant might use for their cv that match the criteria for the job listing. "
                                   f"write the summaries following the json "
                                   f"schema provided in previous message, and only return the json"
                    }
                ],
                temperature=0.1
            )
        except InvalidRequestError as e:
            return {
                'statusCode': 400,
                'body': '{\"message\": \"openai chat token limit\"}',
                'headers': default_headers
            }

        return {
            'statusCode': 200,
            'body': response['choices'][0]['message']['content'],
            'headers': default_headers
        }
    except Exception as e:
        print(f"{type(e).__name__} error occurred {e}")

        return {
            'statusCode': 500,
            'body': '{\"message\": \"internal server error :(\"}',
            'headers': default_headers
        }
