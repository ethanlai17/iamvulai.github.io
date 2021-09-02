---
title: 10 myths about Product Requirements Document (PRD) - P1
date: 2021-09-03
tags: [0 to PM]
social_image: '/media/blog2.1-banner.jpg'
description: The most important parts of a PRD are functional requirements and mock-ups? Always dive to mock-ups before going to PRD details? What stakeholders request must be delivered without negotiation? 
---

Hello! 
For whom is planning to or just broke into product management recently may find writing PRD so cool. Well, it is, until you have a chance to write it for complex features :) 

You can easily ask Google what PRD is and how to write it so I won't repeat it because she (on my phone) is much smarter than me. However, I still embed some useful links that I've read at the end of this blog. 

Instead, this blog aims to debunk myths about PRD for beginners based on my experiences. Hope it helps.

Let's start the nightmare. 

![blog2.1-banner](/media/blog2.1-banner.jpg)

## Myth 1: The most important parts of a PRD are functional requirements and mock-ups

Unfortunately not. 

There is a high chance that stakeholders may become strangers who unexpectedly cancel all agreements on the release date when the deliverable is not working as their expectation. One of the most common problems causing the issue is that problem statement and goal sections in a PRD are not well defined. People are likely to take this section for granted, which turns out to be a surprisingly high possibility of wrong direction and unexpected increments. 

Reviewing previous PRDs, I'd say the two sections are the most crucial parts because they act as a compass for the whole document. 

It is mutually agreed that a new feature is not always the sole approach to tackle problems. There may be some alternatives such as improved process and workarounds which already exists or takes much less effort to implement. If the sections are documented carefully, a more fruitful and efficient approach may be selected, saving the company's resources. 

My small tip is to avoid jumping into fancy things when the cores are not strongly persuasive. Always keep our mind open with no fixed solution. 

## Myth 2: "All I need to include in a PRD is information that is collected from stakeholders.", PO said

Product life is not that easy.

The word `collected` used in the sentence is incorrect because PO/PM is not the one who receives one-way requirements (We're not secretaries) but try to put ourselves into stakeholder's shoes and think of thousands of invisible scenarios. 

`Elicit` is the correct terminology. Besides asking for more details in their response, expected behaviors in edges cases, many of which have never crossed their mind, must be elicited as much as possible, avoiding any surprises after release. 

For example, stakeholders say they want signup and login pages for a mobile app ASAP (As always).

If I were in this case, I would book a kick-off meeting to ask questions as following (Given that reasons for implementation are clear): 
- What are your expected signup/ login methods? Among them, which is must-have/ should-have/ could-have (MoSCoW method)? 
... (then a few questions to understand their expectation)
- Edge case 1: Given that users fail to log in 5 times, when they click Forgot password button and their registered email couldn't be accessed to verify their identity, how should users solve the problem? 
- Edge case 2: What do you think about the case that users can log in simultaneously with different credentials on different browsers? 

On the other hand, avoid asking obvious questions or raising unrealistic scenarios as it will be counter-productive. A tip here is that you can validate your assumptions by using a template "Please correct me if I'm wrong. In the case abc, the expected behavior is xyz."  

## Myth 3: Include everything, even obvious things, in a PRD even when the development team and PO/PM have worked with each other for a long time

Insanely true. 

Even though the Scrum team has passed forming/storming/norming stages, it doesn't mean that the PRD can be done without care. It is the backbone of the ideation phase, so not a single detail should be skipped.

Circling back to the example, simple acceptance criteria that are not well defined to username is a prime example, where there is an expected constraint of valid email address; however, it is intentionally skipped because of the assumption that developers will apply the same practice from previous projects. In fact, they implement to accept all string. 

That really shows how close PO/PM and the development team are :) 

![](https://media.giphy.com/media/R2m2NzVxQ3pbG/giphy.gif?cid=ecf05e47j0wrnip7ca8h31m8c3h2ri1k45sk3726lrfqn7w6&rid=giphy.gif&ct=g)

## Myth 4: Always dive to mock-ups before going to PRD details

It depends. 

From my perspective, if stakeholders confidently answer challenging questions in detail and know some unknowns during elicitation, it's a clear signal that they somewhat understand their needs. Hence, mock-ups linked in a user flow will be helpful in the ideation phase. 

However, the happy case seldom occurs, especially with complicated features. 

Requirement elicitation may take many rounds due to various unknowns that need to be validated with other dependencies. During this time, it's not surprising that a 180-degree change may happen, leading to demand for updates in mock-ups accordingly. Not sure how much mock-ups' value adds to the document's clarity, but in my opinion, there's no use updating mock-ups with a high level of volatility in requirements.

Instead, I often draw flowcharts in validation meetings and update them along the way as it's not only powerful in illustration but also convenient in maintenance.

## Myth 5: What stakeholders request must be delivered without negotiation

Although features/ enhancements are made for end-users, it's not mandatory to strictly implement all of their expected functionalities. 

Narrowing the scope down and dividing it into smaller phases are two common choices.

Regarding the first option, PM/PO can negotiate with stakeholders to utilize current product's capabilities (at least in a short-term period) for requests which have alternatives, especially when resource is limited. Or, if there is any requirement that is not really valid, don't hesitate to push back. We have that power. 

What if all requests are non-negotiable? 

It's time to make use of planning skills to have deliverables in some phases. Technical view is essential here to be able to have usable increments in every phase with no dependency. 