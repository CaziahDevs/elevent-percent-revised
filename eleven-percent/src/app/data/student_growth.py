import json
import pandas as pd
import numpy as np
from scipy import stats
from scipy.stats import shapiro
import matplotlib.pyplot as plt

#Read json files into dataframes
with open('eleven-percent/src/app/data/total-students.json') as total_students_data:
    total_students = pd.read_json(total_students_data)

with open('eleven-percent/src/app/data/total-grad.json') as total_grad_data:
    total_grad = pd.read_json(total_grad_data)

with open('eleven-percent/src/app/data/total-undergrad.json') as total_undergrad_data:
    total_undergrad = pd.read_json(total_undergrad_data)

# print(total_students['TOTAL BLACK STUDENTS'].describe())
# print(total_grad['TOTAL BLACK STUDENTS'].describe())
# print(total_undergrad['TOTAL BLACK STUDENTS'].describe())

# # Calculate year-over-year growth rates
total_students['Total Growth'] = total_students['TOTAL STUDENTS'].pct_change()
total_students['Black Growth'] = total_students['TOTAL BLACK STUDENTS'].pct_change()
total_undergrad['Total Growth'] = total_undergrad['TOTAL STUDENTS'].pct_change()
total_undergrad['Black Growth'] = total_undergrad['TOTAL BLACK STUDENTS'].pct_change()
total_grad['Black Growth'] = total_grad['TOTAL BLACK STUDENTS'].pct_change()
total_grad['Total Growth'] = total_grad['TOTAL STUDENTS'].pct_change()

                                                

# # Remove the first row (NaN due to pct_change)
total_students = total_students.dropna()

# # Calculate mean growth rates
mean_total_growth = total_students['Total Growth'].mean()
mean_black_growth = total_students['Black Growth'].mean()
mean_total_undergrad_growth = total_undergrad['Total Growth'].mean()
mean_black_undergrad_growth = total_undergrad['Black Growth'].mean()
mean_total_grad_growth = total_grad['Total Growth'].mean()
mean_black_grad_growth = total_grad['Black Growth'].mean()

print(f"\nMean growth rates:")
print(f"Total student population: {mean_total_growth:.2%}")
print(f"Black student population: {mean_black_growth:.2%}")
print(f"Total undergraduate population: {mean_total_undergrad_growth:.2%}")
print(f"Black undergraduate population: {mean_black_undergrad_growth:.2%}")
print(f"Total graduate population: {mean_total_grad_growth:.2%}")
print(f"Black graduate population: {mean_black_grad_growth:.2%}")
