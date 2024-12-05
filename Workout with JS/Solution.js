let output = document.getElementById('output')
let personalTrainer = {
    name: 'John',
    workouts: ['Pushups', 'Situps', 'Squats'],
    startWorkout: function (workout){

    let isAvailable = this.workouts.includes(workout)

    if(isAvailable){
      output.innerText = `John is starting ${workout}.`
    }else{
         output.innerText = `John doesn't know the ${workout} workout.`
    }
    
    }
    

}
