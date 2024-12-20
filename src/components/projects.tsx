export const Projects = () => {
    return <div>Projects</div>
}import pandas as pd
from geopy.distance import geodesic
from tqdm import tqdm
from joblib import Parallel, delayed

# Sample DataFrames
# hospital_df = ...
# niva_df = ...

# Function to calculate distance and filter records
def calculate_distance(hospital_row, niva_df, distance_threshold=120):
    matching_records = []
    hospital_coords = (hospital_row['latitude'], hospital_row['longitude'])
    
    for _, niva_row in niva_df.iterrows():
        niva_coords = (niva_row['latitude'], niva_row['longitude'])
        distance = geodesic(hospital_coords, niva_coords).meters
        
        if distance <= distance_threshold:
            matching_records.append({
                'niva_id': niva_row['query_id'],
                'name_niva': niva_row['name'],
                'address_niva': niva_row['address'],
                'latitude_niva': niva_row['latitude'],
                'longitude_niva': niva_row['longitude'],
                'hospital_id': hospital_row['query_id'],
                'name_hospital': hospital_row['name'],
                'address_hospital': hospital_row['address'],
                'latitude_hospital': hospital_row['latitude'],
                'longitude_hospital': hospital_row['longitude'],
                'distance_difference': distance
            })
    
    return matching_records

def find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=-1):
    # Extract latitude and longitude from the `location` column
    # hospital_df['latitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][1])
    # hospital_df['longitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # niva_df['latitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][1])
    # niva_df['longitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # Use Parallel processing with tqdm for progress bar
    matching_records = Parallel(n_jobs=n_jobs)(
        delayed(calculate_distance)(hospital_row, niva_df, distance_threshold)
        for _, hospital_row in tqdm(hospital_df.iterrows(), total=hospital_df.shape[0], desc="Processing hospitals")
    )

    # Flatten the list of lists and create a DataFrame
    matching_records_flat = [record for sublist in matching_records for record in sublist]
    matched_df = pd.DataFrame(matching_records_flat)
    
    return matched_df

# Run the function with progress tracking and parallelization
matched_locations_df = find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=4)

# Save the result to a JSON file for review
matched_locations_df.to_json("matched_locations.json", orient="records", indent=4)

print("Matching locations saved successfully!")
import pandas as pd
from geopy.distance import geodesic
from tqdm import tqdm
from joblib import Parallel, delayed

# Sample DataFrames
# hospital_df = ...
# niva_df = ...

# Function to calculate distance and filter records
def calculate_distance(hospital_row, niva_df, distance_threshold=120):
    matching_records = []
    hospital_coords = (hospital_row['latitude'], hospital_row['longitude'])
    
    for _, niva_row in niva_df.iterrows():
        niva_coords = (niva_row['latitude'], niva_row['longitude'])
        distance = geodesic(hospital_coords, niva_coords).meters
        
        if distance <= distance_threshold:
            matching_records.append({
                'niva_id': niva_row['query_id'],
                'name_niva': niva_row['name'],
                'address_niva': niva_row['address'],
                'latitude_niva': niva_row['latitude'],
                'longitude_niva': niva_row['longitude'],
                'hospital_id': hospital_row['query_id'],
                'name_hospital': hospital_row['name'],
                'address_hospital': hospital_row['address'],
                'latitude_hospital': hospital_row['latitude'],
                'longitude_hospital': hospital_row['longitude'],
                'distance_difference': distance
            })
    
    return matching_records

def find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=-1):
    # Extract latitude and longitude from the `location` column
    # hospital_df['latitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][1])
    # hospital_df['longitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # niva_df['latitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][1])
    # niva_df['longitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # Use Parallel processing with tqdm for progress bar
    matching_records = Parallel(n_jobs=n_jobs)(
        delayed(calculate_distance)(hospital_row, niva_df, distance_threshold)
        for _, hospital_row in tqdm(hospital_df.iterrows(), total=hospital_df.shape[0], desc="Processing hospitals")
    )

    # Flatten the list of lists and create a DataFrame
    matching_records_flat = [record for sublist in matching_records for record in sublist]
    matched_df = pd.DataFrame(matching_records_flat)
    
    return matched_df

# Run the function with progress tracking and parallelization
matched_locations_df = find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=4)

# Save the result to a JSON file for review
matched_locations_df.to_json("matched_locations.json", orient="records", indent=4)

print("Matching locations saved successfully!")
import pandas as pd
from geopy.distance import geodesic
from tqdm import tqdm
from joblib import Parallel, delayed

# Sample DataFrames
# hospital_df = ...
# niva_df = ...

# Function to calculate distance and filter records
def calculate_distance(hospital_row, niva_df, distance_threshold=120):
    matching_records = []
    hospital_coords = (hospital_row['latitude'], hospital_row['longitude'])
    
    for _, niva_row in niva_df.iterrows():
        niva_coords = (niva_row['latitude'], niva_row['longitude'])
        distance = geodesic(hospital_coords, niva_coords).meters
        
        if distance <= distance_threshold:
            matching_records.append({
                'niva_id': niva_row['query_id'],
                'name_niva': niva_row['name'],
                'address_niva': niva_row['address'],
                'latitude_niva': niva_row['latitude'],
                'longitude_niva': niva_row['longitude'],
                'hospital_id': hospital_row['query_id'],
                'name_hospital': hospital_row['name'],
                'address_hospital': hospital_row['address'],
                'latitude_hospital': hospital_row['latitude'],
                'longitude_hospital': hospital_row['longitude'],
                'distance_difference': distance
            })
    
    return matching_records

def find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=-1):
    # Extract latitude and longitude from the `location` column
    # hospital_df['latitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][1])
    # hospital_df['longitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # niva_df['latitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][1])
    # niva_df['longitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # Use Parallel processing with tqdm for progress bar
    matching_records = Parallel(n_jobs=n_jobs)(
        delayed(calculate_distance)(hospital_row, niva_df, distance_threshold)
        for _, hospital_row in tqdm(hospital_df.iterrows(), total=hospital_df.shape[0], desc="Processing hospitals")
    )

    # Flatten the list of lists and create a DataFrame
    matching_records_flat = [record for sublist in matching_records for record in sublist]
    matched_df = pd.DataFrame(matching_records_flat)
    
    return matched_df

# Run the function with progress tracking and parallelization
matched_locations_df = find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=4)

# Save the result to a JSON file for review
matched_locations_df.to_json("matched_locations.json", orient="records", indent=4)

print("Matching locations saved successfully!")
import pandas as pd
from geopy.distance import geodesic
from tqdm import tqdm
from joblib import Parallel, delayed

# Sample DataFrames
# hospital_df = ...
# niva_df = ...

# Function to calculate distance and filter records
def calculate_distance(hospital_row, niva_df, distance_threshold=120):
    matching_records = []
    hospital_coords = (hospital_row['latitude'], hospital_row['longitude'])
    
    for _, niva_row in niva_df.iterrows():
        niva_coords = (niva_row['latitude'], niva_row['longitude'])
        distance = geodesic(hospital_coords, niva_coords).meters
        
        if distance <= distance_threshold:
            matching_records.append({
                'niva_id': niva_row['query_id'],
                'name_niva': niva_row['name'],
                'address_niva': niva_row['address'],
                'latitude_niva': niva_row['latitude'],
                'longitude_niva': niva_row['longitude'],
                'hospital_id': hospital_row['query_id'],
                'name_hospital': hospital_row['name'],
                'address_hospital': hospital_row['address'],
                'latitude_hospital': hospital_row['latitude'],
                'longitude_hospital': hospital_row['longitude'],
                'distance_difference': distance
            })
    
    return matching_records

def find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=-1):
    # Extract latitude and longitude from the `location` column
    # hospital_df['latitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][1])
    # hospital_df['longitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # niva_df['latitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][1])
    # niva_df['longitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # Use Parallel processing with tqdm for progress bar
    matching_records = Parallel(n_jobs=n_jobs)(
        delayed(calculate_distance)(hospital_row, niva_df, distance_threshold)
        for _, hospital_row in tqdm(hospital_df.iterrows(), total=hospital_df.shape[0], desc="Processing hospitals")
    )

    # Flatten the list of lists and create a DataFrame
    matching_records_flat = [record for sublist in matching_records for record in sublist]
    matched_df = pd.DataFrame(matching_records_flat)
    
    return matched_df

# Run the function with progress tracking and parallelization
matched_locations_df = find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=4)

# Save the result to a JSON file for review
matched_locations_df.to_json("matched_locations.json", orient="records", indent=4)

print("Matching locations saved successfully!")
import pandas as pd
from geopy.distance import geodesic
from tqdm import tqdm
from joblib import Parallel, delayed

# Sample DataFrames
# hospital_df = ...
# niva_df = ...

# Function to calculate distance and filter records
def calculate_distance(hospital_row, niva_df, distance_threshold=120):
    matching_records = []
    hospital_coords = (hospital_row['latitude'], hospital_row['longitude'])
    
    for _, niva_row in niva_df.iterrows():
        niva_coords = (niva_row['latitude'], niva_row['longitude'])
        distance = geodesic(hospital_coords, niva_coords).meters
        
        if distance <= distance_threshold:
            matching_records.append({
                'niva_id': niva_row['query_id'],
                'name_niva': niva_row['name'],
                'address_niva': niva_row['address'],
                'latitude_niva': niva_row['latitude'],
                'longitude_niva': niva_row['longitude'],
                'hospital_id': hospital_row['query_id'],
                'name_hospital': hospital_row['name'],
                'address_hospital': hospital_row['address'],
                'latitude_hospital': hospital_row['latitude'],
                'longitude_hospital': hospital_row['longitude'],
                'distance_difference': distance
            })
    
    return matching_records

def find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=-1):
    # Extract latitude and longitude from the `location` column
    # hospital_df['latitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][1])
    # hospital_df['longitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # niva_df['latitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][1])
    # niva_df['longitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # Use Parallel processing with tqdm for progress bar
    matching_records = Parallel(n_jobs=n_jobs)(
        delayed(calculate_distance)(hospital_row, niva_df, distance_threshold)
        for _, hospital_row in tqdm(hospital_df.iterrows(), total=hospital_df.shape[0], desc="Processing hospitals")
    )

    # Flatten the list of lists and create a DataFrame
    matching_records_flat = [record for sublist in matching_records for record in sublist]
    matched_df = pd.DataFrame(matching_records_flat)
    
    return matched_df

# Run the function with progress tracking and parallelization
matched_locations_df = find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=4)

# Save the result to a JSON file for review
matched_locations_df.to_json("matched_locations.json", orient="records", indent=4)

print("Matching locations saved successfully!")
import pandas as pd
from geopy.distance import geodesic
from tqdm import tqdm
from joblib import Parallel, delayed

# Sample DataFrames
# hospital_df = ...
# niva_df = ...

# Function to calculate distance and filter records
def calculate_distance(hospital_row, niva_df, distance_threshold=120):
    matching_records = []
    hospital_coords = (hospital_row['latitude'], hospital_row['longitude'])
    
    for _, niva_row in niva_df.iterrows():
        niva_coords = (niva_row['latitude'], niva_row['longitude'])
        distance = geodesic(hospital_coords, niva_coords).meters
        
        if distance <= distance_threshold:
            matching_records.append({
                'niva_id': niva_row['query_id'],
                'name_niva': niva_row['name'],
                'address_niva': niva_row['address'],
                'latitude_niva': niva_row['latitude'],
                'longitude_niva': niva_row['longitude'],
                'hospital_id': hospital_row['query_id'],
                'name_hospital': hospital_row['name'],
                'address_hospital': hospital_row['address'],
                'latitude_hospital': hospital_row['latitude'],
                'longitude_hospital': hospital_row['longitude'],
                'distance_difference': distance
            })
    
    return matching_records

def find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=-1):
    # Extract latitude and longitude from the `location` column
    # hospital_df['latitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][1])
    # hospital_df['longitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # niva_df['latitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][1])
    # niva_df['longitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # Use Parallel processing with tqdm for progress bar
    matching_records = Parallel(n_jobs=n_jobs)(
        delayed(calculate_distance)(hospital_row, niva_df, distance_threshold)
        for _, hospital_row in tqdm(hospital_df.iterrows(), total=hospital_df.shape[0], desc="Processing hospitals")
    )

    # Flatten the list of lists and create a DataFrame
    matching_records_flat = [record for sublist in matching_records for record in sublist]
    matched_df = pd.DataFrame(matching_records_flat)
    
    return matched_df

# Run the function with progress tracking and parallelization
matched_locations_df = find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=4)

# Save the result to a JSON file for review
matched_locations_df.to_json("matched_locations.json", orient="records", indent=4)

print("Matching locations saved successfully!")
import pandas as pd
from geopy.distance import geodesic
from tqdm import tqdm
from joblib import Parallel, delayed

# Sample DataFrames
# hospital_df = ...
# niva_df = ...

# Function to calculate distance and filter records
def calculate_distance(hospital_row, niva_df, distance_threshold=120):
    matching_records = []
    hospital_coords = (hospital_row['latitude'], hospital_row['longitude'])
    
    for _, niva_row in niva_df.iterrows():
        niva_coords = (niva_row['latitude'], niva_row['longitude'])
        distance = geodesic(hospital_coords, niva_coords).meters
        
        if distance <= distance_threshold:
            matching_records.append({
                'niva_id': niva_row['query_id'],
                'name_niva': niva_row['name'],
                'address_niva': niva_row['address'],
                'latitude_niva': niva_row['latitude'],
                'longitude_niva': niva_row['longitude'],
                'hospital_id': hospital_row['query_id'],
                'name_hospital': hospital_row['name'],
                'address_hospital': hospital_row['address'],
                'latitude_hospital': hospital_row['latitude'],
                'longitude_hospital': hospital_row['longitude'],
                'distance_difference': distance
            })
    
    return matching_records

def find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=-1):
    # Extract latitude and longitude from the `location` column
    # hospital_df['latitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][1])
    # hospital_df['longitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # niva_df['latitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][1])
    # niva_df['longitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # Use Parallel processing with tqdm for progress bar
    matching_records = Parallel(n_jobs=n_jobs)(
        delayed(calculate_distance)(hospital_row, niva_df, distance_threshold)
        for _, hospital_row in tqdm(hospital_df.iterrows(), total=hospital_df.shape[0], desc="Processing hospitals")
    )

    # Flatten the list of lists and create a DataFrame
    matching_records_flat = [record for sublist in matching_records for record in sublist]
    matched_df = pd.DataFrame(matching_records_flat)
    
    return matched_df

# Run the function with progress tracking and parallelization
matched_locations_df = find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=4)

# Save the result to a JSON file for review
matched_locations_df.to_json("matched_locations.json", orient="records", indent=4)

print("Matching locations saved successfully!")
import pandas as pd
from geopy.distance import geodesic
from tqdm import tqdm
from joblib import Parallel, delayed

# Sample DataFrames
# hospital_df = ...
# niva_df = ...

# Function to calculate distance and filter records
def calculate_distance(hospital_row, niva_df, distance_threshold=120):
    matching_records = []
    hospital_coords = (hospital_row['latitude'], hospital_row['longitude'])
    
    for _, niva_row in niva_df.iterrows():
        niva_coords = (niva_row['latitude'], niva_row['longitude'])
        distance = geodesic(hospital_coords, niva_coords).meters
        
        if distance <= distance_threshold:
            matching_records.append({
                'niva_id': niva_row['query_id'],
                'name_niva': niva_row['name'],
                'address_niva': niva_row['address'],
                'latitude_niva': niva_row['latitude'],
                'longitude_niva': niva_row['longitude'],
                'hospital_id': hospital_row['query_id'],
                'name_hospital': hospital_row['name'],
                'address_hospital': hospital_row['address'],
                'latitude_hospital': hospital_row['latitude'],
                'longitude_hospital': hospital_row['longitude'],
                'distance_difference': distance
            })
    
    return matching_records

def find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=-1):
    # Extract latitude and longitude from the `location` column
    # hospital_df['latitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][1])
    # hospital_df['longitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # niva_df['latitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][1])
    # niva_df['longitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # Use Parallel processing with tqdm for progress bar
    matching_records = Parallel(n_jobs=n_jobs)(
        delayed(calculate_distance)(hospital_row, niva_df, distance_threshold)
        for _, hospital_row in tqdm(hospital_df.iterrows(), total=hospital_df.shape[0], desc="Processing hospitals")
    )

    # Flatten the list of lists and create a DataFrame
    matching_records_flat = [record for sublist in matching_records for record in sublist]
    matched_df = pd.DataFrame(matching_records_flat)
    
    return matched_df

# Run the function with progress tracking and parallelization
matched_locations_df = find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=4)

# Save the result to a JSON file for review
matched_locations_df.to_json("matched_locations.json", orient="records", indent=4)

print("Matching locations saved successfully!")
import pandas as pd
from geopy.distance import geodesic
from tqdm import tqdm
from joblib import Parallel, delayed

# Sample DataFrames
# hospital_df = ...
# niva_df = ...

# Function to calculate distance and filter records
def calculate_distance(hospital_row, niva_df, distance_threshold=120):
    matching_records = []
    hospital_coords = (hospital_row['latitude'], hospital_row['longitude'])
    
    for _, niva_row in niva_df.iterrows():
        niva_coords = (niva_row['latitude'], niva_row['longitude'])
        distance = geodesic(hospital_coords, niva_coords).meters
        
        if distance <= distance_threshold:
            matching_records.append({
                'niva_id': niva_row['query_id'],
                'name_niva': niva_row['name'],
                'address_niva': niva_row['address'],
                'latitude_niva': niva_row['latitude'],
                'longitude_niva': niva_row['longitude'],
                'hospital_id': hospital_row['query_id'],
                'name_hospital': hospital_row['name'],
                'address_hospital': hospital_row['address'],
                'latitude_hospital': hospital_row['latitude'],
                'longitude_hospital': hospital_row['longitude'],
                'distance_difference': distance
            })
    
    return matching_records

def find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=-1):
    # Extract latitude and longitude from the `location` column
    # hospital_df['latitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][1])
    # hospital_df['longitude_hospital'] = hospital_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # niva_df['latitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][1])
    # niva_df['longitude_niva'] = niva_df['location'].apply(lambda loc: loc['coordinates'][0])
    
    # Use Parallel processing with tqdm for progress bar
    matching_records = Parallel(n_jobs=n_jobs)(
        delayed(calculate_distance)(hospital_row, niva_df, distance_threshold)
        for _, hospital_row in tqdm(hospital_df.iterrows(), total=hospital_df.shape[0], desc="Processing hospitals")
    )

    # Flatten the list of lists and create a DataFrame
    matching_records_flat = [record for sublist in matching_records for record in sublist]
    matched_df = pd.DataFrame(matching_records_flat)
    
    return matched_df

# Run the function with progress tracking and parallelization
matched_locations_df = find_matching_locations(hospital_df, niva_df, distance_threshold=120, n_jobs=4)

# Save the result to a JSON file for review
matched_locations_df.to_json("matched_locations.json", orient="records", indent=4)

print("Matching locations saved successfully!")
