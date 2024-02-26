useThrottle Hook
- ![#f03c15] Initialise State : Create a state to hold the throttle value using useState
- ![#c5f015] Track last execution time : useRef to keep track of the last time function was executed.
- ![#1589F0] useEffect fpr throttling : 
        (*) Set up a Timer (using setTimeout) to handle the logic
        (*) Inside Timer
            * Check the time elapsed since last execution
            *If the elapsed time is greater than or equal to the specified delay, update the throttled value and the last execution time
- ![#f03c15]
- ![#c5f015]
- ![#1589F0]
