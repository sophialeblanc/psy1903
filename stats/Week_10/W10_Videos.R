#### Sophia LeBlanc | 11/02/2025 | Week 10 -------------------------------------

## Start by setting your working directory to your psy1903 folder. Replace "~/Desktop/" with the correct path to your psy1903 directory:
setwd("~/Desktop/psy1903/")

dir.create("stats/Week_10")

## Set working directory
setwd("~/Desktop/psy1903/stats/Week_10")
getwd()

## Save this script (you can just use command+S or File → Save As)

getRandomNumber <- function(){
  sample(1:10,1)
}

getRandomNumber()

## Change range

getRandomNumber <- function(min,max){
  sample(min:max,1)
}

getRandomNumber(5,25)

## get error undefined if no args provided

## provide defaults if no one enters args

getRandomNumber <- function(min = 1, max = 10, number = 1){
  sample(min:max,number)
}
getRandomNumber()

getRandomNumber(18,65,3)

## as you can see, can set own parameters but have default set if no one enters args. Automate tasks, flexible for change

## conditionals, decisions

age <- 21

if(age>= 18){
  print("You are an adult.")
} else{
  print("You are not an adult.")
}

if (age >= 65){
  print("You are a senior.")
} else if (age>=18){
  print("You are an adult.")
} else if (age>=13){
  print("You are a teen.")
} else {
  print("You are a child.")
}
  
## checks top to bottom, executes first condition met, branching logic depending on result

## repeating tasks using loops: control structure! run block multiple times, do same thing per item in set of values

for(variable in sequence) {
  code
}

## for = starting loop, () = specify variable and sequence, variable takes on each value in sequence one at a time, {} = code to run per iteration

for (i in 1:5){
  print(paste("Iterations: ", i))
}

## runs same command as long as still items in sequence... rename, apply transformations, etc. executed sequentially, step by step
## can refer back to prior steps, can update as it goes... combine with conditions:

experiment_data <- data.frame(
  subject_id = c(1:20),
  rt = c(480, 530, 495, 610, 455, 390, 510, 565, 430, NA, 380, 230, 395, 710, 755, 590, 810, 365, 630, 200),
  congruent = c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE, TRUE, TRUE, FALSE, TRUE, FALSE),
  condition = c("control", "control", "incongruent", "control",
                "incongruent", "control", "incongruent", "incongruent",
                "control", "incongruent", "control", "control", "incongruent",
                "control", "incongruent", "control", "incongruent", "incongruent",
                "control", "incongruent")
)

## Create a new (empty) column
experiment_data$rt_category <- NA

## Use a for loop to classify each subject
for (i in 1:nrow(experiment_data)) {
  if (is.na(experiment_data[i, "rt"])) {
    experiment_data[i, "rt_category"] <- "Unknown"
  } else if (experiment_data[i, "rt"] < 500) {
    experiment_data[i, "rt_category"] <- "Fast"
  } else {
    experiment_data[i, "rt_category"] <- "Slow"
  }
}

## if rt is missing, assign unknown, assign fast/slow depending on value; row-wise data manipulation, target/update individual cells
## for loops process on element at a time, loops good for complex logic depending on results from earlier iterations... not for simple on every element
## vectorization! describe what to do, R does internal / optimized code. Loops are manual.

experiment_data$rt_category_vector <- NA

## Using a vectorized function
experiment_data$rt_category_vector <- ifelse(experiment_data$rt < 500, "Fast", "Slow")
## to handle missing, nest in:
experiment_data$rt_category <- ifelse(
  is.na(experiment_data$rt), "Unknown",              # If RT is missing
  ifelse(experiment_data$rt < 500, "Fast", "Slow")   # Otherwise, check Fast vs Slow
)
## still applying element by element, but you don't have to explicitly control, can apply across whole vectors

## built in tools w/o loops

## Example matrix of reaction times from 3 blocks per subject
rt_data <- data.frame(
  block1 = c(520, 480, 610, 390, 450),
  block2 = c(530, 470, 600, 420, 500),
  block3 = c(540, 490, 590, 410, 480)
)
rt_data

## Mean reaction time across blocks for each subject across blocks (row-wise)
rowMeans(rt_data)
# [1] 530.0 480.0 600.0 406.7 476.7
## good for questionnairs

## Mean reaction time for each block across subjects (column-wise)
colMeans(rt_data)
# block1 block2 block3 
# 490 504 504 

## apply applies ANY function to rows/columns

## Apply the mean function across columns (2 = columns)
apply(rt_data, 2, mean)
# Same as colMeans()

## Apply the standard deviation across rows (1 = rows)
apply(rt_data, 1, sd)

## tapply, by group

## Mean RT by experimental condition
tapply(experiment_data$rt, experiment_data$condition, mean)
#   control incongruent 
#   523.6     531.1

## Mean RT by congruency (TRUE/FALSE)
tapply(experiment_data$rt, experiment_data$congruent, mean)
#   FALSE  TRUE 
#   516.4  536.3


#### Global vs. Local Variable x -----------------------------------------------
x <- 10          # Global variable x is defined as 10

## Create function to print variable x
my_function <- function() {
  x <- 20       # Local variable within the function x is defined as 20
  print(x)      # This will print 20 (the local variable x)
}

my_function()   # Call the function. This will print 20 (the local variable x)
print(x)        # Outside the function, this will print 10 (the global variable x)

## if comment out the in-function def, will pull from global
## remove x from global, agrument no longer found, nothing to reference, same issue if try to print

x <- 10  # Global variable x is defined as 10

# Create a loop that defines x within the loop
for(i in 1:3) {
  x <- 20  # Local variable x inside the loop
  print(x)  # This will print 20, the local x inside the loop
}

print(x)  # Outside the loop, global x will have been overwritten as 20

#### Defining x locally in a function ------------------------------------------
## Function without argument x set
my_function <- function() {
  x * 2
}
my_function() # Produces the error: "Error in my_function() : object 'x' not found" because x is not defined in either global or local environment

## Function with variable x set in global environment
x <- 10
my_function <- function() {
  x * 2
}
my_function() # Uses global variable x, which is assigned the value of 10, and outputs 20. Will cause errors after removing global variable x, or will not update x as expected

## Function with argument x set
my_function <- function(x) {
  print(x)
  x * 2
  print(x)
}
my_function(5) # Passes the value directly via the argument, e.g., `x <- 5` is implicitly coded by placing the 5 in the x position of the function argument, and each call of my_function(x) will produce an updated output of x * 2 as expected

# Poor
x <- 10
df1 <- read.csv("data.csv")

# Better
num_participants <- 10
survey_data <- read.csv("survey_responses.csv")

#### Load Packages ------------------------------------------------------------
library(tidyverse)

#### Load and Inspect Data ---------------------------------------------------
data <- read.csv("experiment_data.csv")
summary(data)

#### Calculate Summary Statistics --------------------------------------------
mean_rt <- mean(data$rt, na.rm = TRUE)

