## test_debug.R

## Clear global environment (mimick how Quarto works)
rm(list = ls())

## Source all scripts
source(here::here("scripts/calculate_iat_dscore.R"))
source(here::here("scripts/score_questionnaire.R"))
source(here::here("scripts/summarize_behavior.R"))
source(here::here("scripts/import_and_process.R"))
source(here::here("scripts/build_participant_wide.R"))

## Set one file name
file_name <- "sub-001_P2P1_CONGfirst.csv"

## Test functions
df_clean <- import_and_process(file_name)
print(df_clean)

#### Tracking My Work ------------

## Identifying Bugs (7 total)

  ## import_and_process.R
    ## 1 -- CORRECTION: Typo, initially read "questionnaire" when should be "Questionnaire",
            ## so questionnaire_df was being created with zero observations
            ## questionnaire_df <- df[df$trialType == "Questionnaire", , drop = FALSE]
    ## 2 -- CORRECTION: Looking for column "trialType", but some participant data has column "trial_type"
            ## Added: names(df)[names(df) == "trial_type"] <- "trialType"
            ## same with expectedCategoryDisplayed and expectedCategoryAsDisplayed
            ## names(df)[names(df) == "expectedCategoryDisplayed"] <- "expectedCategoryAsDisplayed"

  ## score_questionnaire.R
    ## 1 -- CORRECTION: Typo, initially read as sapply(response,is.null) when should be "responses", plural
            ## so, resulted in an "object not found" error message
            ## responses[sapply(responses, is.null)] <- NA
    ## 2 -- CORRECTION: Typo, read initially as c(12, 5) when should be c(2, 5)
            ## function(json_string, 
            ## reverse = c(2, 5), 
            ## scale_min = 1L, 
            ## scale_max = 5L)

  ## summarize_behavior.R
    ## 1 -- CORRECTION: Typo, initially read "expectedCategoryDisplayed" when should be "expectedCategoryAsDisplayed",
            ## which led to an error in mismatched 'argument lengths'
            ##grp_rt <- factor(
                ##test_data_rt$expectedCategoryAsDisplayed,
                ## levels = desired_order
              ##)

  ## calculate_iat_dscore.R
    ## 1 -- CORRECTION: Typo, initially read "and serenity" when should be "or serenity"
            ## so, when comparing test_df$expectedCategoryAsDisplayed and desired_order, there was a mismatch
            ## and incong_rt turned out empty
            ## desired_order <- c(
              ## "nature or serenity or school or anxiety", # congruent
              ## "nature or anxiety or school or serenity"  # incongruent
            ## )

  ## build_participant_wide.R
    ## 1 -- CORRECTION: full.names was initially TRUE but should be FALSE to prevent adding the directory path twice
            ## full.names = FALSE

## Refactoring

  ## summarize_behavior.R
    ## 1 -- This indexing does not follow best practices at first,
            ## it relies on positionality which is subject to change if data is edited/moved.
            ## Indexing by name is more reliable, readable, and resilient to order changes.
            ## Further, I switched from hardcoded values to min/max placeholders, which allows
            ## flexibility if the arguments (lower and upper limits) change.
            ## valid_data_rt <- data[data$rt >= rt_min & data$rt <= rt_max & data$correct == TRUE, ]
            ## valid_data_acc <- data[data$rt >= rt_min & data$rt <= rt_max, ]
            ## check on adding min/max instead of hardcoding
    ## 2 -- I made this step more clear & concise by eliminating the "for" loop,
            ## which was inefficiently performing the calculation row by row.
            ## The vectorized version automatically applies to the entire column.
            ## valid_data_rt$rt_centered <- valid_data_rt$rt - mean(valid_data_rt$rt, na.rm = TRUE)

  ## build_participant_wide.R
    ## 1 -- This was initially multi-step code involving an inefficient "for loop"
            ## used to apply the import_and_process function on all listed files, one-by-one.
            ## Instead, using lapply condenses this code to one line, 
            ## applies the function on all elements of the files list, and returns listed results.
            ## rows <- lapply(files, import_and_process)
