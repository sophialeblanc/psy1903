#### Q4 Importing & Inspecting -------------------------------

## Get paths for all EST CSV data files

list.files("data/raw", pattern = "^est-experiment-.*\\.csv$", full.names = TRUE)

## TEST individual file to try out with function

## file_path  <- here::here("data", "raw", "est-experiment-2025-11-05-09-04-45.csv")

## Start function

process_participant <- function(file_path) {

## Extract subject ID from file name

subject_id <- sub("\\.csv$", "", basename(file_path))

participant_data <- read.csv(file_path)
## str(participant_data)
## head(participant_data)
## names(participant_data)

if ("trial_type" %in% names(participant_data) &&
    !"trialType" %in% names(participant_data)) {
  
  warning(
    paste(
      "Column 'trial_type' found in",
      sub("\\.csv$", "", basename(file_path)),
      "-- renaming to 'trialType'."
    )
  )
  
  ## Look up the column names of participant_data, find the position where the name
  ## equals "BAD_NAME", and replace that name with "GOOD_NAME".
  names(participant_data)[names(participant_data) == "trial_type"] <- "trialType"
}

required_cols <- c("rt", "correct", "trialType")
if (!all(required_cols %in% names(participant_data))) {
  stop(
    paste(
      "Input data frame missing required columns in",
      sub("\\.csv$", "", basename(file_path)),
      "\nExpected:",
      paste(required_cols, collapse = ", "),
      "\nFound:",
      paste(names(participant_data), collapse = ", ")
    )
  )
}

## Source in other R files/functions

source(here::here("scripts","compute_rt_if_missing.R"))
source(here::here("scripts","summarize_behavior.R"))
source(here::here("scripts","score_questionnaire.R"))

## Apply functions

participant_data <- compute_rt_if_missing(participant_data)

behavior_summary <- summarize_behavior(participant_data)

esq_sum <- score_questionnaire(participant_data[participant_data$trialType == "es_questionnaire", "response"])

## Create cleaned data frame

cleaned_df <- data.frame(
  subject_id = subject_id,
  mean_accuracy = behavior_summary$mean_accuracy,
  mean_rt_correct = behavior_summary$mean_rt_correct,
  esq_sum = esq_sum
)

  write.csv(
    cleaned_df,
    here::here("data", "cleaned", paste0(subject_id, "_processed.csv")),
    row.names = FALSE
  )

return(cleaned_df)

}

## Test function outside of function

## process_participant(file_path)
## participant_data <- read.csv(file_path)
## str(participant_data)
## head(participant_data)
## names(participant_data)
