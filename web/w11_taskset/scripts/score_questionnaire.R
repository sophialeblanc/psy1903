#### Q6 Score ESQ-9 -------------------------------

score_questionnaire <- function(json_string) {
  
  if (is.null(json_string) || is.na(json_string) || !nzchar(json_string)) {
    return(NA_real_) 
  }
  
  responses <- fromJSON(json_string)
  responses <- as.numeric(unlist(responses))
  
  rev_items <- c(2, 5, 9)
  
  if (length(rev_items) > 0) {
    if (any(rev_items < 1 | rev_items > length(responses))) {
      stop("One or more 'reverse' item indices are out of range for this questionnaire response.")
    }
    responses[rev_items] <- 4 - responses[rev_items]
  }
  
  return(sum(responses, na.rm = TRUE))
}