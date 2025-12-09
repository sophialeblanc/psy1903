#### build_participant_wide -----------------------------------------------------
## Purpose: Loop over all raw participant CSV files, process each one with
##          import_and_process(), and combine results into a single wide table.
##
## Inputs:
##   - None (function automatically scans data/raw for *.csv files)
## Output:
##   - A data frame with one row per participant and one column per summary
##     variable (RT means, accuracy, questionnaire score, D score, etc.).
##
## Example call:
##   participant_wide <- build_participant_wide()

build_participant_wide <- function() {
  files <- list.files(
    here::here("data", "raw"),
    pattern = "sub-.*\\.csv$",
    full.names = FALSE
  )
  
  ## CORRECTION: full.names was initially TRUE but should be FALSE to prevent adding the directory path twice
  
  ## If you see an error "cannot open the connection", it usually means that R cannot find something where it's looking. Check your paths, files, and file_name. Remember where file_name comes from.
  
  if (length(files) == 0L) stop("No CSV files found in data/raw")
  
  ## REFACTOR: See below - this was initially multi-step code involving an inefficient "for loop"
     ## used to apply the import_and_process function on all listed files, one-by-one.
     ## Instead, using lapply condenses this code to one line, 
     ## applies the function on all elements of the files list, and returns listed results.
  
  ## rows <- list()
  ## for (i in seq_along(files)) {
    ## file_name <- files[i]
    ## rows[[i]] <- import_and_process(file_name)
  ## }
  
  rows <- lapply(files, import_and_process)

  out  <- do.call(rbind, rows)
  
  rownames(out) <- NULL
  
  return(out)
}