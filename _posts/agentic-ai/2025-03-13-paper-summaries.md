---
layout: post
title: Paper Summaries
tag: math
category: posts
order: 1
pagestyle: base
pagestyle2: post
---

## When "A Helpful Assistant" Is Not Really Helpful: Personas in System Prompts Do Not Improve Performances of Large Language Models

[https://arxiv.org/pdf/2311.10054](https://arxiv.org/pdf/2311.10054)
[Code Repo](https://github.com/Jiaxin-Pei/Prompting-with-Social-Roles)

(1) Does adding personas to system prompts help improve model performance on objective tasks? (2) Does the social construct of the persona affect model performance? (3) What factors could potentially explain the effect of personas on model performance? (4) Can we automatically identify the best roles for prompting? Through our analysis, we find that, in general, prompting with personas has no or small negative effects on model performance compared with the control setting where no persona is added.

Our study makes the following three contributions. First, we introduce a new pipeline to systematically evaluate LLMs' performance when prompted with a wide range of personas. Second, our large-scale experiments reveal an important finding that prompting LLMs with personas might actually hurt their performance on objective tasks. Third, through analyzing a wide range of persona attributes and automatic role-searching strategies, we found that the effect of personas on model performance is not consistent across questions. While a certain persona may lead to the correct answer for each question, the presence of such personas is largely unpredictable.

[Relevant Code](https://github.com/Jiaxin-Pei/Prompting-with-Social-Roles/blob/main/scripts/ngram_frequency.py) (why?)

[Ngram Website](https://books.google.com/ngrams/graph?content=mom%2Cdad%2Cpapa%2Cmummy&year_start=1800&year_end=2022&case_insensitive=true&corpus=en&smoothing=5) (interesting)


Review: really simple paper - did absolutely nothing much than answer questions with a bit of statistics. Nice base setup for an LLM project where we just want to see the final result of how accurate an LLM is.

## Persona is a Double-edged Sword: Mitigating the Negative Impact of Role-playing Prompts in Zero-shot Reasoning Tasks

[https://arxiv.org/pdf/2408.08631](https://arxiv.org/pdf/2408.08631)

Look at that conf matrix comparing a neutral to a role based reply

Basic idea being - we get two solvers one with the persona and one without. Then if the selected response that we get from them is not the same we run an evaluator that tries to judge out of both the responses which one is the better response.

I would dig deeper if they had some code.

## ExpertPrompting: Instructing Large Language Models to be Distinguished Experts

[https://arxiv.org/pdf/2305.14688](https://arxiv.org/pdf/2305.14688)

1. Given an input instruction \( q \), an aligned LLM (such as ChatGPT or Claude) produces an output \( a \), which is the model's direct response to the instruction.
    $$ a = LLM(q) $$
2. The expert identity \( e_q \) is created by conditioning the LLM on multiple relevant instruction-answer pairs. The operator \( \oplus \) represents concatenation or combination of these pairs, allowing the model to generate an identity description that encapsulates expertise.
    $$ e_q = LLM(\{q_1, e_{q_1}\} \oplus \dots \oplus \{q_k, e_{q_k}\} \oplus q) $$
3. By providing both the expert identity \( e_q \) and the original instruction \( q \), the LLM is expected to generate an improved response \( \hat{a} \), which should be more authoritative and accurate compared to \( a \).
    $$ \hat{a} = LLM(\{e_q, q\}) $$

most ulti-inducing paper was this one but I guess the way they got their roles was actually better - for very descripting answers (and this paper is basically just comparing the answer lengths - sigh)