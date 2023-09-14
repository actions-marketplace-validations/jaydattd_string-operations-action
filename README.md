# string-operations-action

## All the javascript string functions can be performed on given string

### Example - 1
To perform 'Test'.toUpperCase()

```
  - name: Call string conversion
    id: convert-string
    uses: jaydattd/string-operations-action@main
    with:
        string_to_process: 'Test'
        function_name: 'toUpperCase()'

  - name: Get the output conversion
    run: echo "Converted string is ${{ steps.convert-string.outputs.result }}"
 ```   
### Example - 2
To perform 'Test'.length

```
  - name: Call string conversion
    id: convert-string
    uses: jaydattd/string-operations-action@main
    with:
        string_to_process: 'Test'
        function_name: 'length

  - name: Get the output conversion
    run: echo "Converted string is ${{ steps.convert-string.outputs.result }}"
 ```   