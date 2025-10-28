#### Sophia LeBlanc | 10/28/2025 | Data basics in R for Task Set 9 -------------------------------------

## Start by setting your working directory to your psy1903 folder. Replace "~/Desktop/" with the correct path to your psy1903 directory:
setwd("~/Desktop/psy1903/")

dir.create("stats/r_foundations_practice")

## Set working directory
setwd("~/Desktop/psy1903/stats/r_foundations_practice")
getwd()

## Save this script (you can just use command+S or File → Save As)

## Q2.1

age <- 19
name <- "Sophia"
is_psych_major <- TRUE
favorite_numbers <- c(6, 12, 36, 42)

typeof(age)
typeof(name)
typeof(is_psych_major)
typeof(favorite_numbers)

class(age)
class(name)
class(is_psych_major)
class(favorite_numbers)

## Q2.2

rt <- c(480, 530, 495, 610, 455, 390, 510, 565, 430, 500)
mean(rt)
sd(rt)
rt_adjusted <- rt + 50
mean_diff <- mean(rt_adjusted) - mean(rt)

## Q2.3

rt[5] = NA
mean(rt, na.rm = TRUE)

## Q2.4

summary(rt)
str(rt)

##Q3

subject_id <- c(1,2,3,4,5,6,7,8,9,10)
congruent <- c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE)
condition <- c("control", "control", "incongruent", "control", "incongruent", "control", "incongruent", "incongruent", "control", "incongruent")
experiment_data <- data.frame(rt, subject_id, congruent, condition)

head(experiment_data)
tail(experiment_data)
summary(experiment_data)
str(experiment_data)

experiment_data$rt[3]
experiment_data$rt[experiment_data$rt > 500]
experiment_data[1:5,c("subject_id","rt")]
experiment_data[experiment_data$subject_id == 4, ]

experiment_data$condition
experiment_data[,"condition"]

fast_trials <- experiment_data[experiment_data$rt < 500,]
incongruent_trials <- experiment_data[experiment_data$congruent == FALSE,]
fast_incongruent <- experiment_data[experiment_data$rt < 500 & experiment_data$congruent == FALSE,]
nrow(fast_trials)
nrow(incongruent_trials)
nrow(fast_incongruent)

sapply(experiment_data, typeof)
experiment_data$condition <- as.factor(experiment_data$condition)
str(experiment_data)

mean(experiment_data$rt[experiment_data$congruent == TRUE], na.rm = TRUE)
mean(experiment_data$rt[experiment_data$congruent == FALSE], na.rm = TRUE)

mean(experiment_data$rt[experiment_data$condition == "control"], na.rm = TRUE)
mean(experiment_data$rt[experiment_data$condition == "incongruent"], na.rm = TRUE)
mean(experiment_data$rt[experiment_data$condition == "incongruent"], na.rm = TRUE) - mean(experiment_data$rt[experiment_data$condition == "control"], na.rm = TRUE)
## The mean in the "control" condition (488 ms) is faster than the mean in "incongruent" (517.5 ms) by 29.5 ms. 
congruency_effect <- mean(experiment_data$rt[experiment_data$condition == "incongruent"], na.rm = TRUE) - mean(experiment_data$rt[experiment_data$condition == "control"], na.rm = TRUE)
print(paste("The congruency effect was", congruency_effect, "milliseconds."))

## Q5

experiment_data$rt_z <- (experiment_data$rt - mean(experiment_data$rt, na.rm = TRUE)) / sd(experiment_data$rt, na.rm = TRUE)
head(experiment_data)

experiment_data$fast <- ifelse (experiment_data$rt < 500, TRUE, FALSE)
head(experiment_data)

new_row <- data.frame(subject_id = 11, rt = 470, congruent = TRUE, condition = "control", rt_z = NA, fast = TRUE)
experiment_data <- rbind(experiment_data, new_row)
tail(experiment_data)

experiment_data$rt_z <- NULL
names(experiment_data)

clean_data <- experiment_data[experiment_data$rt >400 & experiment_data$rt < 600 & !is.na(experiment_data$rt),]
nrow(clean_data)

mean(clean_data$rt)
mean(experiment_data$rt, na.rm = TRUE)
mean(experiment_data$rt, na.rm = TRUE) - mean(clean_data$rt)
