From Parent to Child:
parent -    tagvalue -> function
            function -> variable
            variable -> binding
child  -    binding -> Input
            Input -> Interpolation


From Child to Parent:
child - tagname - function
        function - service function
        service function - service emitter
parent - ngoninit - service emitter
         service emitter - subscribe
         subscribe - variable
         variable - Interpolation

