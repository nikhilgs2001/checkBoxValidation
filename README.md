## What is this?

A checkBox handling mechanism for header as well as single checkbox associated with it for rendering.

## Installation

Run `npm i validate_checkbox_for_multi_rendering`

Use:
````
let [firstData, array_result] = validateCheckBox(type_of_checkBox,value_of_checkBox,object_key_name,array_data,index)
````
Parameters:
````
type_of_checkBox => "single","double"
````
````
value_of_checkBox => true, false
````
````
object_key_name => Give the Object's key name that is used for rendering or validating checkbox.
````
````
array_data => array of objects need to be passed.
````
````
index => pass the index if `single` is given in the type
````