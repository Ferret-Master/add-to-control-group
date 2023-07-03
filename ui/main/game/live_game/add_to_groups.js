model.add_to_group = function(group){
    var selectedIdArray = [];
    if(model.selection()){

        selectedUnitArray = model.selection().spec_ids;
        var unitKeys = _.keys(selectedUnitArray);
        for(key in unitKeys){
           
            selectedIdArray = selectedIdArray.concat(selectedIdArray, selectedUnitArray[unitKeys[key]]);

        }
        engine.call("select.recallGroup", typeof (group) == 'number' ? group : 0, "add");
        api.select.captureGroup(group);
        api.select.empty();
        api.select.unitsById(selectedIdArray)
   

    }

    var selectedIdArray = [];

}

action_sets.gameplay["add_to_group_1"] = function(){

    model.add_to_group(1)

}
action_sets.gameplay["add_to_group_2"] = function(){

    model.add_to_group(2)

}
action_sets.gameplay["add_to_group_3"] = function(){

    model.add_to_group(3)

}
action_sets.gameplay["add_to_group_4"] = function(){

    model.add_to_group(4)

}
action_sets.gameplay["add_to_group_5"] = function(){

    model.add_to_group(5)

}
action_sets.gameplay["add_to_group_6"] = function(){

    model.add_to_group(6)

}
action_sets.gameplay["add_to_group_7"] = function(){

    model.add_to_group(7)

}
action_sets.gameplay["add_to_group_8"] = function(){

    model.add_to_group(8)

}
action_sets.gameplay["add_to_group_9"] = function(){

    model.add_to_group(9)

}
action_sets.gameplay["add_to_group_0"] = function(){

    model.add_to_group(0)

}
