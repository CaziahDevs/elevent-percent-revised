import json
import pandas as pd
import numpy as np
from scipy import stats
from scipy.stats import shapiro
import matplotlib.pyplot as plt

#Read json files into dataframes
with open('data/total-students.csv') as total_students_data:
    total_students = pd.read_csv(total_students_data)

with open('data/total-grad.csv') as total_grad_data:
    total_grad = pd.read_csv(total_grad_data)

with open('data/total-undergrad.csv') as total_undergrad_data:
    total_undergrad = pd.read_csv(total_undergrad_data)


print(total_students['Black Students'].describe())

# # Calculate year-over-year growth rates
# total_students['Total Growth'] = total_students['Total Students'].pct_change()
# total_students['Black Growth'] = total_students['Black Students'].pct_change()


# # Remove the first row (NaN due to pct_change)
# total_students = total_students.dropna()

# # print(total_students['Total Growth'])
# # print(total_students['Black Growth'])

# # Perform paired t-test on growth rates
# t_statistic, p_value = stats.ttest_rel(total_students['Total Growth'], total_students['Black Growth'])

# # print(f"Paired t-test results [Total Students]:")
# # print(f"t-statistic: {t_statistic}")
# # print(f"p-value: {p_value}")



# statistic, p_value = shapiro(total_students['Total Students'])

# # print("Shapiro-Wilk Test:")
# # print("Statistic:", statistic)
# # print("P-value:", p_value)


# # Calculate mean growth rates
# mean_total_growth = total_students['Total Growth'].mean()
# mean_black_growth = total_students['Black Growth'].mean()

# # print(f"\nMean growth rates:")
# # print(f"Total student population: {mean_total_growth:.2%}")
# # print(f"Black student population: {mean_black_growth:.2%}")

# # # Visualize growth rates
# plt.figure(figsize=(12, 6))
# plt.plot(total_students['Year'], total_students['Total Growth'], label='Total Growth')
# plt.plot(total_students['Year'], total_students['Black Growth'], label='Black Student Growth')
# plt.title('Year-over-Year Growth Rates')
# plt.xlabel('Year')
# plt.ylabel('Growth Rate')
# plt.legend()
# plt.grid(True)
# plt.show()

# # Calculate and plot cumulative growth
# total_students['Cumulative_Total_Growth'] = (1 + total_students['Total Growth']).cumprod() - 1
# total_students['Cumulative_Black_Growth'] = (1 + total_students['Black Growth']).cumprod() - 1

# plt.figure(figsize=(12, 6))
# plt.plot(total_students['Year'], total_students['Cumulative_Total_Growth'], label='Total Cumulative Growth')
# plt.plot(total_students['Year'], total_students['Cumulative_Black_Growth'], label='Black Student Cumulative Growth')
# plt.title('Cumulative Growth')
# plt.xlabel('Year')
# plt.ylabel('Cumulative Growth Rate')
# plt.legend()
# plt.grid(True)
# plt.show()