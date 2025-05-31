---
layout: post
title: Basic Stats
tag: Your Shitty Guide To
category: posts
order: 1
pagestyle: base
pagestyle2: post
---

I keep forgetting basic stats every other month - would be nice to have a cute summary that get's you up to speed in 30 minutes or so.

I'm reading [OpenIntro Statistics - Fourth Edition](https://leanpub.com/os) (free to download).

How do if a cure for a disease actually works? How do we know if - yeah, you guessed it - STATS.

## Clinical Experiments

Treatment group: Patients in the treatment group receive the medication.

Control group: Patients in the control group receive a placebo.

| Group             | Improvement | No Improvement | Total |
|-------------------|-------------|----------------|-------|
| Treatment (n=100) | 80          | 20             | 100   |
| Control (n=100)   | 10          | 90             | 100   |
| Total             | 90          | 110            | 200   |

(a) What percent of patients in the treatment group experienced improvement in symptoms? 80/100 * 100 = 80%
(b) What percent experienced improvement in symptoms in the control group? 10%
(c) In which group did a higher percentage of patients experience improvement in symptoms? The treatment group had a higher percentage (80%) than the control group (10%).
(d) One other possible explanation for the observed difference:
While the data suggests that the treatment (possibly an antibiotic) is more effective than the placebo, another possible explanation is:

The placebo group may have had more severe or prolonged cases of sinusitis at baseline, or there may have been random variation in patient characteristics (like age, immune response, or coexisting conditions) despite random assignment.

Other possibilities:

1. Self-reporting bias: Patients in the treatment group might expect to feel better and report improvement even if the effect is psychological (placebo effect).
2. Sampling error: The sample size (n=100 per group) might be too small to rule out chance variation.
3. Natural recovery: Sinusitis often resolves without treatment. Those in the treatment group may have coincidentally improved due to natural healing, not the medication.
   
## Types of Variables

<div class="mermaid" align="center" height="70%" width="70%">
flowchart TD
    A["Variables"]
    A --> B["Numerical"]
    A --> C["Categorical"]
    
    B --> B1["Continuous"]
    B --> B2["Discrete"]
    
    C --> C1["Nominal"]
    C --> C2["Ordinal"]
    
    B1 --> E1["e.g. Height, Temperature, Weight"]
    B2 --> E2["e.g. Number of Children, Shoe Size"]
    
    C1 --> E3["e.g. Gender, Eye Color, Country"]
    C2 --> E4["e.g. Education Level, Customer Satisfaction"]
</div>

## Sampling

Sampling is selecting a part of a population to study.

- Simple random sample: Everyone has an equal chance of being chosen.
- Stratified sample: Population is split into groups (strata), and a random sample is taken from each group.
- Cluster sample: Population is divided into clusters, some clusters are randomly chosen, and all members in them are surveyed.
- Multistage sample: Combines several sampling methods (e.g., choose clusters, then randomly select people within them).

## Sampling Biases

- Non-response bias: Some people don't respond, possibly affecting results.
- Convenience sample: Picking people who are easy to reach.
- Voluntary response bias: Only those with strong opinions respond.
- Undercoverage bias: Some groups are left out of the sample.

## Observational Studies and Causality

In observational studies, no treatment is applied or withheld. They can show associations, but not causation.

An observational study finds that people who use more sunscreen are more likely to get skin cancer. Does sunscreen cause cancer? Likely not.

<div class="mermaid" align="center" height="70%" width="70%">
flowchart LR
    A["Sun Exposure"]
    B["Skin Cancer"]
    C["Use Sunscreen"]
    
    A --> B
    A --> C
    C -. ? .-> B
</div>
  
A confounding variable—like sun exposure—affects both sunscreen use (explanatory) and skin cancer risk (response). People in the sun more often both use more sunscreen and are more at risk.

## Principles of Experimental Design

Randomized experiments are based on four key principles:

1. Controlling: Keep variables consistent across groups to isolate the treatment effect. Example: All patients take a pill with 12 oz of water to control water intake differences.
2. Randomization: Randomly assign participants to groups to balance out unknown or uncontrollable variables and avoid bias.
3. Replication: Use a large sample to improve accuracy. Repeating studies also helps verify findings.
4. Blocking: Group participants by variables known to affect the outcome (e.g., risk level) before randomizing within each group. Ensures treatment groups are balanced on those variables.

First three principles are essential in any experiment. Blocking is optional but useful when applicable.

## Reducing Bias in Human Experiments

Randomized experiments are ideal for studying cause-and-effect but can still suffer from bias, especially in human studies.
1. Emotional Effects & Bias: Participants may react emotionally—those receiving treatment might feel hopeful, while control group members may feel neglected. This emotional effect can unintentionally bias results.
2. Blinding: To reduce bias, researchers blind patients so they don't know whether they're receiving the treatment or not.  
3. Placebo: A fake treatment (e.g., sugar pill) given to control group participants to maintain blinding. Placebo Effect: When patients show slight improvement simply from believing they're receiving treatment.
4. Double-Blind Studies: Doctors and researchers can also introduce bias. A double-blind study ensures that neither the patients nor the medical staff know who is receiving the actual treatment. This helps maintain objectivity and improves the reliability of results.

<div class="admonition note">
  <p class="admonition-title">Random Question - Chia seeds and weight loss</p>

  <p>Chia Pets – those terra-cotta figurines that sprout fuzzy green hair – made the chia plant a household name. But chia has gained an entirely new reputation as a diet supplement. In one 2009 study, a team of researchers recruited 38 men and divided them randomly into two groups: treatment or control. They also recruited 38 women, and they randomly placed half of these participants into the treatment group and the other half into the control group. One group was given 25 grams of chia seeds twice a day, and the other was given a placebo. The subjects volunteered to be a part of the study. After 12 weeks, the scientists found no significant difference between the groups in appetite or weight loss.</p>

  <p>(a) What type of study is this?<br>
  Experimental – participants were randomly assigned and conditions were controlled.</p>

  <p>(b) What are the experimental and control treatments?<br>
  Treatment: 25g chia seeds twice daily<br>
  Control: Placebo</p>

  <p>(c) Has blocking been used? If so, what is the blocking variable?<br>
  Yes. Blocking by gender (men and women split evenly).</p>

  <p>(d) Has blinding been used?<br>
  Not explicitly stated, but likely single-blind due to use of a placebo.</p>

  <p>(e) Can we make a causal statement? Can we generalize the results?<br>
  Causal: Yes, due to random assignment.<br>
  Generalization: Limited. Volunteers and small sample size reduce broader applicability.</p>
</div>

<div class="admonition note">
  <p class="admonition-title">Flawed Reasoning - Survey and Observational Study Biases</p>

  <p>(a) Students at an elementary school are given a questionnaire that they are asked to return after their parents have completed it. One of the questions asked is, "Do you find that your work schedule makes it difficult for you to spend time with your kids after school?" Of the parents who replied, 85% said "no". Based on these results, the school officials conclude that a great majority of the parents have no difficulty spending time with their kids after school.<br>
  Flaw: Non-response bias – only those who responded are included, possibly skewing the results. The question is also leading, possibly inducing socially desirable answers.<br>
  Improvement: Increase response rate with follow-ups or incentives. Rephrase question neutrally (e.g., use options like "Often", "Sometimes", etc.). Acknowledge and account for non-response bias.</p>

  <p>(b) A survey is conducted on a simple random sample of 1,000 women who recently gave birth, asking them about whether or not they smoked during pregnancy. A follow-up survey asking if the children have respiratory problems is conducted 3 years later. However, only 567 of these women are reached at the same address. The researcher reports that these 567 women are representative of all mothers.<br>
  Flaw: Attrition bias – only 567 of the 1,000 women could be reached for the follow-up. The remaining group may not be representative.<br>
  Improvement: Better tracking methods, compare demographics of those reached vs. not reached, adjust using statistical techniques, and report limitations due to attrition.</p>

  <p>(c) An orthopedist administers a questionnaire to 30 of his patients who do not have any joint problems and finds that 20 of them regularly go running. He concludes that running decreases the risk of joint problems.<br>
  Flaw: Selection bias – only surveys his own healthy patients. No control group. Possibility of reverse causality (healthy joints lead to running).<br>
  Improvement: Use a prospective design tracking runners and non-runners over time. Include a control group and sample a more diverse population.</p>
</div>

## Mean, Standard Deviation, and Variance

1. Mean (Average): The mean is the average value of a dataset.
   $$\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i$$
   Where:
   - $x_i$ are the individual data values  
   - $\bar{x}$ is the sample mean  
   - $n$ is the number of values  
2. Variance measures how spread out the data is around the mean.
   $$s^2 = \frac{1}{n - 1} \sum_{i=1}^{n} (x_i - \bar{x})^2$$
   Population Variance:
   $$\sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \mu)^2$$
3. Standard Deviation is the square root of variance
   $$s = \sqrt{s^2}$$
   It is in the same unit as the data and describes how far data values typically are from the mean.

The variance is the average squared distance from the mean. The standard deviation is the square root of the variance. The standard deviation is useful when considering how far the data are distributed from the mean.

The standard deviation represents the typical deviation of observations from the mean. Usually about 70% of the data will be within one standard deviation of the mean and about 95% will be within two standard deviations. However, these percentages are not strict rules.

## Bessel's Correction

In sample statistics, we divide by $n - 1$ instead of $n$ when calculating sample variance.

Why?  
Because using $n$ tends to underestimate the population variance.  
Dividing by $n - 1$ corrects this bias and gives an unbiased estimator.

## Sample Data

| Value ($x_i$) |
|---------------|
| 2             |
| 4             |
| 4             |
| 4             |
| 5             |
| 5             |
| 7             |
| 9             |

- $n = 8$  
- $\bar{x} = \frac{2 + 4 + 4 + 4 + 5 + 5 + 7 + 9}{8} = 5$

Deviations and Squared Deviations:

| $x_i$ | $x_i - \bar{x}$  | $(x_i - \bar{x})^2$ |
|-------|------------------|---------------------|
| 2     | -3               | 9                   |
| 4     | -1               | 1                   |
| 4     | -1               | 1                   |
| 4     | -1               | 1                   |
| 5     | 0                | 0                   |
| 5     | 0                | 0                   |
| 7     | 2                | 4                   |
| 9     | 4                | 16                  |
|       | Total            | 32                  |

Sample Variance:

$$s^2 = \frac{32}{8 - 1} = \frac{32}{7} \approx 4.57$$

Sample Standard Deviation:

$$s = \sqrt{4.57} \approx 2.14$$

### Box Plots, Quartiles, and the Median

1. Box Plot: A box plot is a graphical summary of data that shows the distribution's center and spread. It displays:
   - Minimum
   - First quartile (Q1)
   - Median (Q2)
   - Third quartile (Q3)
   - Maximum
    The "box" represents the interquartile range (IQR), from Q1 to Q3. "Whiskers" extend from the box to the minimum and maximum values, often excluding outliers.
2. Median (Q2): The median is the middle value of a dataset when ordered from smallest to largest. If there are an even number of observations, it is the average of the two middle values.
3. Quartiles: Quartiles split the data into four equal parts:
   - Q1 (first quartile): the median of the lower half (25th percentile)
   - Q2 (second quartile): the overall median (50th percentile)
   - Q3 (third quartile): the median of the upper half (75th percentile)
4. Interquartile Range (IQR): measures the middle 50% of the data:
   $$\text{IQR} = Q3 - Q1$$
   It is a measure of spread that is not affected by extreme values or outliers.
   Example: Suppose we have the following sorted dataset:
   3, 5, 7, 8, 9, 10, 12, 13, 15
      - Median (Q2) = 9
      - Q1 = median of [3, 5, 7, 8] = (5 + 7)/2 = 6
      - Q3 = median of [10, 12, 13, 15] = (12 + 13)/2 = 12.5
      - IQR = 12.5 - 6 = 6.5
5. Outliers
   An observation is typically considered an outlier if it is:
   - Below Q1 - 1.5 * IQR
   - Above Q3 + 1.5 * IQR

## Robust Statistics
The median and IQR are called robust statistics because extreme observations have little effect on their values: moving the most extreme value generally has little influence on these statistics.
On the other hand, the mean and standard deviation are more heavily influenced by changes in extreme observations, which can be important in some situations.

## Transforming Data
When data are very strongly skewed, we sometimes transform them so they are easier to model. Like using a log transform

[https://en.wikipedia.org/wiki/Data_transformation_(statistics)](https://en.wikipedia.org/wiki/Data_transformation_(statistics))

## Data Visualization Tips

1. Don't use pie charts
2. Hollow histograms when comparing two or more things
3. Mosaic plots help visualize differences between groups of people and the decisions they make.

## Hypothesis Testing
Data scientists are sometimes called upon to evaluate the strength of evidence. When looking at the rates of infection for patients in the two groups in this study, what comes to mind as we try to determine whether the data show convincing evidence of a real difference?

This is a reminder that the observed outcomes in the data sample may not perfectly reflect the true relationships between variables since there is random noise. While the observed difference in rates of infection is large, the sample size for the study is small, making it unclear if this observed difference represents efficacy of the vaccine or whether it is simply due to chance. We label these two competing claims, H0 and HA, which are spoken as "H-nought" and "H-A":

**H0: Independence model**  
The variables treatment and outcome are independent. They have
no relationship, and the observed difference between the proportion of patients who developed an infection in the two groups, 64.3%, was due to chance.

**HA: Alternative model**  
The variables are not independent. The difference in infection rates of 64.3% was not due to chance, and the vaccine affected the rate of infection.

What would it mean if the independence model, which says the vaccine had no influence on the rate of infection, is true? It would mean 11 patients were going to develop an infection no matter which group they were randomized into, and 9 patients would not develop an infection no matter which group they were randomized into. That is, if the vaccine did not affect the rate of infection, the difference in the infection rates was due to chance alone in how the patients were randomized.

Now consider the alternative model: infection rates were influenced by whether a patient received the vaccine or not. If this was true, and especially if this influence was substantial, we would expect to see some difference in the infection rates of patients in the groups.

We choose between these two competing claims by assessing if the data conflict so much with H0 that the independence model cannot be deemed reasonable. If this is the case, and the data support HA, then we will reject the notion of independence and conclude the vaccine was effective.
