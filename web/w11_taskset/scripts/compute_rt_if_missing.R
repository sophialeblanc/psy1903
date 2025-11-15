#### Q5 Scoring & Cleaning -------------------------------

## Create function -- for-loop with if/else

## compute_rt_if_missing <- function(data) {
 ## for (i in 1:nrow(data)) {
  ##  if (!is.na(data$response[i]) && is.na(data$rt[i]) && !is.na(data$stim_onset_ms[i]) && !is.na(data$resp_time_ms[i])) {
     ## data$rt[i] <- data$resp_time_ms[i] - data$stim_onset_ms[i]
   ## }
 ## }
  ## return(data)
## }

## Create function to compute missing rt values -- vectorized version (USE)

compute_rt_if_missing <- function(data) {
  data$rt <- ifelse(
    !is.na(data$response) & is.na(data$rt) & !is.na(data$stim_onset_ms) & !is.na(data$resp_time_ms), 
    data$resp_time_ms - data$stim_onset_ms,
    data$rt
  )
  return(data)
}