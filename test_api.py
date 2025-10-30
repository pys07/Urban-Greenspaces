#!/usr/bin/env python3
"""
Test script for Green Spaces Classification API
Tests the backend endpoints with sample data
"""

import requests
import json
import os
from io import BytesIO
from PIL import Image
import numpy as np

def create_test_image(color, size=(200, 200)):
    """Create a test image with a specific color"""
    # Create RGB image
    img_array = np.full((size[1], size[0], 3), color, dtype=np.uint8)
    img = Image.fromarray(img_array)
    
    # Convert to bytes
    img_buffer = BytesIO()
    img.save(img_buffer, format='PNG')
    img_buffer.seek(0)
    
    return img_buffer

def test_api():
    """Test the classification API"""
    base_url = "http://localhost:5000"
    
    print("Testing Green Spaces Classification API...")
    print("=" * 50)
    
    # Test 1: Health check
    print("\\n1. Testing health check endpoint...")
    try:
        response = requests.get(f"{base_url}/api/health")
        if response.status_code == 200:
            print("✅ Health check passed")
            print(f"   Response: {response.json()}")
        else:
            print(f"❌ Health check failed: {response.status_code}")
            return
    except requests.exceptions.ConnectionError:
        print("❌ Cannot connect to backend API")
        print("   Please make sure the backend is running on http://localhost:5000")
        return
    
    # Test 2: Classification with test images
    print("\\n2. Testing image classification...")
    
    # Create test images with different colors
    test_images = [
        ("barren_test.png", create_test_image([220, 220, 50])),  # Yellow - Barren Land
        ("residential_test.png", create_test_image([200, 50, 50])),  # Red - Residential
        ("vegetation_test.png", create_test_image([50, 150, 50])),  # Green - Vegetation
        ("water_test.png", create_test_image([50, 50, 200])),  # Blue - Water
    ]
    
    for algorithm in ['lr', 'knn', 'rf']:
        print(f"\\n   Testing {algorithm.upper()} algorithm...")
        
        # Prepare files for upload
        files = []
        for filename, img_buffer in test_images:
            files.append(('images', (filename, img_buffer.getvalue(), 'image/png')))
        
        data = {'algorithm': algorithm}
        
        try:
            response = requests.post(f"{base_url}/api/classify", files=files, data=data)
            
            if response.status_code == 200:
                result = response.json()
                print(f"   ✅ {algorithm.upper()} classification successful")
                print(f"      Algorithm: {result['algorithm']}")
                print(f"      Accuracy: {result['accuracy']}%")
                print(f"      Processing time: {result['processing_time']}s")
                print(f"      Images processed: {len(result['image_results'])}")
                
                # Show top land use category
                classification = result['classification']
                top_category = max(classification, key=classification.get)
                print(f"      Dominant land use: {top_category} ({classification[top_category]}%)")
                
            else:
                print(f"   ❌ {algorithm.upper()} classification failed: {response.status_code}")
                try:
                    error = response.json()
                    print(f"      Error: {error.get('error', 'Unknown error')}")
                except:
                    print(f"      Response: {response.text}")
        
        except Exception as e:
            print(f"   ❌ {algorithm.upper()} test error: {str(e)}")
        
        # Reset image buffers for next test
        for _, img_buffer in test_images:
            img_buffer.seek(0)
    
    print("\\n" + "=" * 50)
    print("API testing completed!")
    print("\\nNow you can test the frontend at: http://localhost:5173")

if __name__ == "__main__":
    test_api()