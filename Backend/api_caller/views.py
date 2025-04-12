from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
import json
import requests
import os
from dotenv import load_dotenv
# Create your views here.

load_dotenv()
YELP_API_KEY = os.getenv("YELP_API_KEY")


def home_test(request):
    return HttpResponse("How'd you get here?? ...")


def format_yelp_response(businesses):
    formatted = []
    for b in businesses:
        formatted.append({
            "name": b["name"],
            "rating": b.get("rating", "N/A"),
            "categories": [cat["title"] for cat in b.get("categories", [])],
            "location": ", ".join(b["location"].get("display_address", [])),
            "phone": b.get("display_phone", ""),
            "url": b.get("url", "")
        })
    return formatted




@csrf_exempt



def fetch_services(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        category = data.get('category', 'plumber')
        location = data.get('location', 'Hempstead, NY')

        print(f"category: {category}")
        print(f"Location: {location}")

        headers = {
            "Authorization": f"Bearer {YELP_API_KEY}",
            "accept": "application/json"
        }

        params = {
            "term": category,
            "location": location,
            "limit": 5,
            "sort_by": "best_match"
        }

        url = f"https://api.yelp.com/v3/businesses/search?location={location}&term={category}&categories=&sort_by=best_match&limit=20"
        res = requests.get(url, headers=headers)
        raw_results = res.json().get('businesses', [])
        
        results = []
        for b in raw_results:
            results.append({
                "name": b["name"],
                "rating": b.get("rating", "N/A"),
                "categories": [c["title"] for c in b.get("categories", [])],
                "location": ", ".join(b["location"].get("display_address", [])),
                "phone": b.get("display_phone", ""),
                "image_url": b.get("image_url", ""),
                "url": b.get("url", "")
            })
            

        return JsonResponse({'results': results})
    
    return JsonResponse({'error': 'Invalid request'}, status=400)

