#### (1) Setup initial directory structure -------------------------------------

## Start by setting your working directory to your psy1903 folder. Replace "~/Desktop/" with the correct path to your psy1903 directory:
setwd("~/Desktop/psy1903/")

## Create a new parent directory called "stats" where we will be doing all of our R work:
dir.create("stats/")

## Create a new directory called "rIntro" for today's exercises:
dir.create("stats/rIntro")
## Create new subdirectories "data", "scripts", & "output" for today's exercises:
dir.create("stats/rIntro/data")
dir.create("stats/rIntro/scripts")
dir.create("stats/rIntro/output")

## Set working directory to the rIntro/scripts parent directory, which will be our home base for today:
setwd("~/Desktop/psy1903/stats/rIntro/scripts")

## Save this script as R_introduction.R within your scripts directory (you can just use command+S or File → Save As)
#### (2) Installation of packages ----------------------------------------------

## Packages are essential toolboxes that you load into R and allow you to do cool things with your data
## One package called "pacman" makes installing packages very easy...

if (!require("pacman")) {install.packages("pacman"); require("pacman")}  # First install and load in pacman to R

## Then use p_load and a list of all of the packages that you need for the project (with each one being in "quotes")

p_load("tidyverse","rstudioapi","lme4","emmeans","psych","corrplot")  # tidyverse contains many packages like dplyr, tidyr, stringr, and ggplot2, among others, and the additional packages should cover our data manipulations, plotting, and analyses
#### This will create a section of code -------------------------------------
# This is a comment
3 + 5 # This is also a comment, but the "3 + 5" before the hashtag is executable code

#### This will create another section of code ####
# Best practice is to use some comments to describe the goal of this section/line of code
x <- 3 + 5 # Code goes here
myVar <- 8  # This will create a variable called myVar and assign it a value of 8.
myVar + 2  # This will use the myVar variable and add 2, outputting 10
myVar <- myVar + 2  # This will overwrite the value of 8, and myVar will now be assigned 10 instead
sum(1, 2, 3)       # Adds numbers 1, 2, and 3, returns 6
mean(c(1, 2, 3))   # Finds the mean (average) of the numbers. 
length(c(1, 2, 3)) # Finds the length of a vector, returns 3
mean(c(1, 2, 3, NA, 5)) # Will output NA because it doesn't know how to handle it
mean(c(1, 2, 3, NA, 5), na.rm = TRUE) # Will remove the NA and calculate the mean of the remaining numbers, outputting 2.75 (the correct answer)
mydata <- read.csv("~/Desktop/psy1903/stats/rIntro/data/data.csv")
head(mydata)      # View the first few rows
str(mydata)       # See the structure of the data frame
summary(mydata)   # Get a summary of each column
mydata <- read.csv("~/Desktop/psy1903/stats/rIntro/data/data.csv", header = TRUE, stringsAsFactors = FALSE, na.strings = c("NA", "?"))
my_matrix <- matrix(1:9, nrow = 3, ncol = 3)  # 3x3 matrix
numeric_vector <- c(1.5, 2.3, 5.0)  # Numeric vector
character_vector <- c("apple", "banana", "cherry")  # Character vector
typeof(character_vector) # Will output "character" in the console window
my_list <- list(1.5, "apple", TRUE, c(1, 2, 3))  # Mixed elements
my_array <- array(1:12, dim = c(3, 2, 2))  # 3D array
my_data <- data.frame(
  id = 1:3,
  name = c("Alice", "Bob", "Charlie"),
  score = c(85.5, 92.0, 88.5)
)
colors <- factor(c("red", "green", "blue", "green", "red"))
my_function <- function(x, y) {
  return(x + y)
}
my_function(3, 5)  # Calls the function and returns 8
as.numeric("5")
as.character(123)
as.logical(0)
as.data.frame(matrix(1:6, nrow = 2))
# Create sample data
subject_id <- 1:20
rt <- c(470, 360, 665, 400, 445, 270, 500, 565, 350, 445, 275, NA, 600, 290, 560, 375, 450, 480, 325, 430)
congruent <- c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, TRUE, TRUE, FALSE, FALSE, TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE)
color <- c("red", "blue", "blue", "green", "red", "red", "blue", "green", "blue", "green", "red", "blue", "green", "blue", "green", "red", "blue", "blue", "green", "red")

# Combine into data frame
data <- data.frame(subject_id, rt, congruent, color)

# Inspect
head(data)    # Displays the top 6 observations — great for checking that your data imported or assigned correctly.
tail(data)    # Displays the bottom 6 observations — useful for confirming structure and missing values at the end.
mean(data$rt) # Without na.rm = TRUE, mean() returns NA because R doesn’t ignore missing values by default.
mean(data$rt, na.rm=TRUE) # This tells R to remove any missing values before calculating the mean. Calculates mean of all RT's = 434.47ms
summary(data) # Displays descriptive statistics for each variable (column) in the dataframe.
str(data)     # Displays the structure of the dataframe — its dimensions, variable types, and a sample of values.
fruits <- c("apple", "banana", "cherry", "date")
fruits[1]       # first element
fruits[2:4]     # elements 2 through 4
fruits[-1]      # all but the first elementlet fruits = ["apple", "banana", "cherry", "date"];
nums <- c(5, 10, 15, 20)
nums[c(TRUE, FALSE, TRUE, FALSE)]  # selects 5 and 15
nums[nums > 10]                    # selects elements greater than 10
scores <- c(math = 90, english = 85, science = 92)
scores["math"]
scores[c("math", "science")]
scores[1] 
scores["english"] 
student <- list(
  name = "Alex",
  age = 20,
  scores = c(88, 92, 95)
)
student$name
student[["age"]]
student$scores[2]
m <- matrix(1:9, nrow = 3, byrow = TRUE)
m
m[1, 2]     # row 1, column 2
m[ , 3]     # all rows, column 3
m[2, ]      # entire second row
m[-1, ]     # exclude the first row
df <- data.frame(
  id = 1:4,
  name = c("Alice", "Bob", "Carmen", "Diego"),
  score = c(88, 92, 95, 90)
)

df[1, ]       # selects the first row (all columns)
df[, 2]       # selects the second column (all rows)
df[1:2, c(1, 3)]  # selects rows 1–2 and columns 1 and 3
df[-1, ]   # all rows except the first
df[, -2]   # all columns except the second
df[1:2, c("id", "score")] 
df[, "score", drop = FALSE]
df[df$score > 90, ]      # rows where score is greater than 90
df[df$name == "Alice", ] # rows where name is Alice
df[df$score > 90 & df$id < 4, ]
df$passed <- df$score >= 90
df
df$passed <- NULL
df
new_row <- data.frame(id = 5, name = "Eva", score = 93)
df <- rbind(df, new_row)
df <- df[-1, ]  # removes the first row
df[df$score > 90 & df$name != "Bob", c("name", "score")]
columns_to_keep <- c("id", "score")
df[, columns_to_keep]
data[data$rt > 400 & !is.na(data$rt), ]
df[df$score > 90, "name"]
subset(df, score > 90 & id < 4, select = c(name, score))
data <- data.frame(
  subject_id = 1:20,
  rt = c(470, 360, 665, 400, 445, 270, 500, 565, 350, 445,
         275, NA, 600, 290, 560, 375, 450, 480, 325, 430),
  congruent = c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE,
                FALSE, TRUE, TRUE, TRUE, FALSE, FALSE, TRUE,
                TRUE, FALSE, TRUE, FALSE, TRUE, FALSE),
  color = c("red", "blue", "blue", "green", "red", "red", "blue",
            "green", "blue", "green", "red", "blue", "green", "blue",
            "green", "red", "blue", "blue", "green", "red")
)
congruent_trials <- data[data$congruent == TRUE, ]
fast_trials <- data[data$rt < 500, ]
fast_congruent <- data[data$congruent == TRUE & data$rt < 500, ]
subset_cols <- data[, c("subject_id", "rt", "congruent")]
