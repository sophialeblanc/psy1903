#### Q6 Convert & Filter -------------------------------

summarize_behavior <- function(data, rt_min = 300, rt_max = 900) {
  data$correct <- as.logical(data$correct)
  mean_accuracy <- mean(data$correct, na.rm = TRUE)
  correct_data <- data[data$correct & data$rt >= rt_min & data$rt <= rt_max,]
  mean_rt_correct <- mean(correct_data$rt, na.rm = TRUE)
  behavior <- data.frame(
    mean_rt_correct = mean_rt_correct,
    mean_accuracy = mean_accuracy
  )
  return(behavior)
}