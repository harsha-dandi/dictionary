# The test isnt fully complete. 
# I spent roughly a day trying to get this complete
# Unfortunately I spent most of my time on getting react-bootstrap-table to work but realisd that the current version is not fit for puropse to do the overall dictionary validation and had to abandon this package
# I havent added any Jest or ENzyme test either
# The path I would take to validate duplicate element in all dictionaries is by adding a middleware liek thunk to intercept the add dictionary element action, access the state and if there is a duplicate element dispatch an error action to the UI
# I also need to create a uniqueid for every element in teh dictionary
# If you agree with m views please revert and I can add the remaining features and tests


