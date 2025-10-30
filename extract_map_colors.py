import cv2
import numpy as np
from collections import Counter
import json

def extract_dominant_colors(image_path, num_colors=5):
    """Extract dominant colors from a map image"""
    # Read the image
    image = cv2.imread(image_path)
    if image is None:
        print(f"Could not read image: {image_path}")
        return []
    
    # Convert BGR to RGB
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    
    # Reshape the image to be a list of pixels
    pixels = image.reshape((-1, 3))
    
    # Remove pure black and white pixels (likely borders/text)
    filtered_pixels = []
    for pixel in pixels:
        r, g, b = pixel
        # Skip very dark or very light pixels
        if not (r < 10 and g < 10 and b < 10) and not (r > 245 and g > 245 and b > 245):
            filtered_pixels.append(tuple(pixel))
    
    # Count color frequencies
    color_counts = Counter(filtered_pixels)
    
    # Get most common colors
    dominant_colors = color_counts.most_common(num_colors * 3)  # Get more to filter better
    
    # Filter colors to get distinct ones (avoid similar colors)
    distinct_colors = []
    for color, count in dominant_colors:
        r, g, b = color
        
        # Check if this color is distinct enough from already selected colors
        is_distinct = True
        for existing_color in distinct_colors:
            er, eg, eb = existing_color
            # Calculate color distance
            distance = ((r-er)**2 + (g-eg)**2 + (b-eb)**2) ** 0.5
            if distance < 50:  # Too similar
                is_distinct = False
                break
        
        if is_distinct:
            distinct_colors.append(color)
            
        if len(distinct_colors) >= num_colors:
            break
    
    return distinct_colors

def rgb_to_hex(rgb):
    """Convert RGB tuple to hex color"""
    return f"#{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}"

def categorize_colors(colors):
    """Categorize colors based on typical land use colors"""
    categorized = {}
    
    for i, color in enumerate(colors):
        r, g, b = color
        
        # Categorize based on color characteristics
        if r > 150 and g > 150 and b < 100:  # Yellow-ish for barren land
            categorized['Barren Land'] = rgb_to_hex(color)
        elif r > 100 and g < 100 and b < 100:  # Red-ish for residential
            categorized['Residential'] = rgb_to_hex(color)
        elif g > r and g > b:  # Green-ish for vegetation
            if 'Vegetation' not in categorized:
                categorized['Vegetation'] = rgb_to_hex(color)
            else:
                categorized['Coastal Vegetation'] = rgb_to_hex(color)
        elif b > r and b > g:  # Blue-ish for water
            categorized['Water'] = rgb_to_hex(color)
        else:
            # Default assignment for remaining categories
            if 'Barren Land' not in categorized:
                categorized['Barren Land'] = rgb_to_hex(color)
            elif 'Residential' not in categorized:
                categorized['Residential'] = rgb_to_hex(color)
            elif 'Vegetation' not in categorized:
                categorized['Vegetation'] = rgb_to_hex(color)
            elif 'Coastal Vegetation' not in categorized:
                categorized['Coastal Vegetation'] = rgb_to_hex(color)
            elif 'Water' not in categorized:
                categorized['Water'] = rgb_to_hex(color)
    
    return categorized

if __name__ == "__main__":
    # Extract colors from a recent map (2020)
    image_path = "images/2020.bmp"
    
    print(f"Extracting colors from {image_path}...")
    colors = extract_dominant_colors(image_path, 5)
    
    if colors:
        print("\nDominant colors found:")
        for i, color in enumerate(colors):
            hex_color = rgb_to_hex(color)
            print(f"{i+1}. RGB{color} -> {hex_color}")
        
        # Categorize colors
        categorized_colors = categorize_colors(colors)
        
        print("\nCategorized colors for land use:")
        for category, hex_color in categorized_colors.items():
            print(f"{category}: {hex_color}")
        
        # Save to JSON file for easy access
        with open("map_colors.json", "w") as f:
            json.dump(categorized_colors, f, indent=2)
        
        print(f"\nColors saved to map_colors.json")
        
        # Generate CSS color values
        print("\nCSS color values:")
        for category, hex_color in categorized_colors.items():
            print(f"'{category}': '{hex_color}',")
    else:
        print("No colors could be extracted from the image.")