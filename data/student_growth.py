import pandas as pd
import numpy as np
from scipy import stats

#Read json files into dataframes
totalStudents = pd.read_json('./totalStudents.json')
total-undergrad = pd.read_json('./total-undergrad.json')
total-grad = pd.read_json('./total-grad.json')

# Calculate year-over-year growth rates
totalStudents['Total_Growth'] = totalStudents['Total_Students'].pct_change()
totalStudents['Black_Growth'] = totalStudents['Total_Black_Students'].pct_change()


