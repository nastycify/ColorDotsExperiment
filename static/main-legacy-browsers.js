﻿/***************** 
 * Смиролор *
 *****************/


// store info about the experiment session:
let expName = 'смиролор';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const trials_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_1LoopBegin(trials_1LoopScheduler));
flowScheduler.add(trials_1LoopScheduler);
flowScheduler.add(trials_1LoopEnd);


flowScheduler.add(PauseRoutineBegin());
flowScheduler.add(PauseRoutineEachFrame());
flowScheduler.add(PauseRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);


flowScheduler.add(Pause2RoutineBegin());
flowScheduler.add(Pause2RoutineEachFrame());
flowScheduler.add(Pause2RoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);


flowScheduler.add(Pause3RoutineBegin());
flowScheduler.add(Pause3RoutineEachFrame());
flowScheduler.add(Pause3RoutineEnd());
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);


flowScheduler.add(Pause4RoutineBegin());
flowScheduler.add(Pause4RoutineEachFrame());
flowScheduler.add(Pause4RoutineEnd());
const trials_5LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_5LoopBegin(trials_5LoopScheduler));
flowScheduler.add(trials_5LoopScheduler);
flowScheduler.add(trials_5LoopEnd);


flowScheduler.add(Pause5RoutineBegin());
flowScheduler.add(Pause5RoutineEachFrame());
flowScheduler.add(Pause5RoutineEnd());
const trials_6LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_6LoopBegin(trials_6LoopScheduler));
flowScheduler.add(trials_6LoopScheduler);
flowScheduler.add(trials_6LoopEnd);


flowScheduler.add(Pause6RoutineBegin());
flowScheduler.add(Pause6RoutineEachFrame());
flowScheduler.add(Pause6RoutineEnd());
const trials_7LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_7LoopBegin(trials_7LoopScheduler));
flowScheduler.add(trials_7LoopScheduler);
flowScheduler.add(trials_7LoopEnd);


flowScheduler.add(Pause7RoutineBegin());
flowScheduler.add(Pause7RoutineEachFrame());
flowScheduler.add(Pause7RoutineEnd());
const trials_8LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_8LoopBegin(trials_8LoopScheduler));
flowScheduler.add(trials_8LoopScheduler);
flowScheduler.add(trials_8LoopEnd);


flowScheduler.add(ExitRoutineBegin());
flowScheduler.add(ExitRoutineEachFrame());
flowScheduler.add(ExitRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Stimul_1.xlsx', 'path': 'Stimul_1.xlsx'},
    {'name': 'К1.jpg', 'path': 'К1.jpg'},
    {'name': 'К2.jpg', 'path': 'К2.jpg'},
    {'name': 'К3.jpg', 'path': 'К3.jpg'},
    {'name': 'К4.jpg', 'path': 'К4.jpg'},
    {'name': 'К5.jpg', 'path': 'К5.jpg'},
    {'name': 'К6.jpg', 'path': 'К6.jpg'},
    {'name': 'К7.jpg', 'path': 'К7.jpg'},
    {'name': 'К8.jpg', 'path': 'К8.jpg'},
    {'name': 'К9.jpg', 'path': 'К9.jpg'},
    {'name': 'К10.jpg', 'path': 'К10.jpg'},
    {'name': 'К11.jpg', 'path': 'К11.jpg'},
    {'name': 'К12.jpg', 'path': 'К12.jpg'},
    {'name': 'К13.jpg', 'path': 'К13.jpg'},
    {'name': 'К14.jpg', 'path': 'К14.jpg'},
    {'name': 'К15.jpg', 'path': 'К15.jpg'},
    {'name': 'К16.jpg', 'path': 'К16.jpg'},
    {'name': 'К17.jpg', 'path': 'К17.jpg'},
    {'name': 'К18.jpg', 'path': 'К18.jpg'},
    {'name': 'К19.jpg', 'path': 'К19.jpg'},
    {'name': 'К20.jpg', 'path': 'К20.jpg'},
    {'name': 'К21.jpg', 'path': 'К21.jpg'},
    {'name': 'К22.jpg', 'path': 'К22.jpg'},
    {'name': 'К23.jpg', 'path': 'К23.jpg'},
    {'name': 'К24.jpg', 'path': 'К24.jpg'},
    {'name': 'К25.jpg', 'path': 'К25.jpg'},
    {'name': 'К26.jpg', 'path': 'К26.jpg'},
    {'name': 'К27.jpg', 'path': 'К27.jpg'},
    {'name': 'К28.jpg', 'path': 'К28.jpg'},
    {'name': 'К29.jpg', 'path': 'К29.jpg'},
    {'name': 'К30.jpg', 'path': 'К30.jpg'},
    {'name': 'К31.jpg', 'path': 'К31.jpg'},
    {'name': 'К32.jpg', 'path': 'К32.jpg'},
    {'name': 'К33.jpg', 'path': 'К33.jpg'},
    {'name': 'К34.jpg', 'path': 'К34.jpg'},
    {'name': 'К35.jpg', 'path': 'К35.jpg'},
    {'name': 'К36.jpg', 'path': 'К36.jpg'},
    {'name': 'К37.jpg', 'path': 'К37.jpg'},
    {'name': 'К38.jpg', 'path': 'К38.jpg'},
    {'name': 'К39.jpg', 'path': 'К39.jpg'},
    {'name': 'К40.jpg', 'path': 'К40.jpg'},
    {'name': 'К41.jpg', 'path': 'К41.jpg'},
    {'name': 'К42.jpg', 'path': 'К42.jpg'},
    {'name': 'К43.jpg', 'path': 'К43.jpg'},
    {'name': 'К44.jpg', 'path': 'К44.jpg'},
    {'name': 'К45.jpg', 'path': 'К45.jpg'},
    {'name': 'К46.jpg', 'path': 'К46.jpg'},
    {'name': 'К47.jpg', 'path': 'К47.jpg'},
    {'name': 'К48.jpg', 'path': 'К48.jpg'},
    {'name': 'К49.jpg', 'path': 'К49.jpg'},
    {'name': 'К50.jpg', 'path': 'К50.jpg'},
    {'name': 'К52.jpg', 'path': 'К52.jpg'},
    {'name': 'К53.jpg', 'path': 'К53.jpg'},
    {'name': 'К54.jpg', 'path': 'К54.jpg'},
    {'name': 'К55.jpg', 'path': 'К55.jpg'},
    {'name': 'К56.jpg', 'path': 'К56.jpg'},
    {'name': 'К57.jpg', 'path': 'К57.jpg'},
    {'name': 'К58.jpg', 'path': 'К58.jpg'},
    {'name': 'К59.jpg', 'path': 'К59.jpg'},
    {'name': 'К60.jpg', 'path': 'К60.jpg'},
    {'name': 'К61.jpg', 'path': 'К61.jpg'},
    {'name': 'К62.jpg', 'path': 'К62.jpg'},
    {'name': 'К63.jpg', 'path': 'К63.jpg'},
    {'name': 'К64.jpg', 'path': 'К64.jpg'},
    {'name': 'К65.jpg', 'path': 'К65.jpg'},
    {'name': 'К66.jpg', 'path': 'К66.jpg'},
    {'name': 'К67.jpg', 'path': 'К67.jpg'},
    {'name': 'К68.jpg', 'path': 'К68.jpg'},
    {'name': 'К69.jpg', 'path': 'К69.jpg'},
    {'name': 'К70.jpg', 'path': 'К70.jpg'},
    {'name': 'К71.jpg', 'path': 'К71.jpg'},
    {'name': 'К72.jpg', 'path': 'К72.jpg'},
    {'name': 'К73.jpg', 'path': 'К73.jpg'},
    {'name': 'К74.jpg', 'path': 'К74.jpg'},
    {'name': 'К75.jpg', 'path': 'К75.jpg'},
    {'name': 'К76.jpg', 'path': 'К76.jpg'},
    {'name': 'К77.jpg', 'path': 'К77.jpg'},
    {'name': 'К78.jpg', 'path': 'К78.jpg'},
    {'name': 'К79.jpg', 'path': 'К79.jpg'},
    {'name': 'К80.jpg', 'path': 'К80.jpg'},
    {'name': 'К81.jpg', 'path': 'К81.jpg'},
    {'name': 'К82.jpg', 'path': 'К82.jpg'},
    {'name': 'К83.jpg', 'path': 'К83.jpg'},
    {'name': 'К84.jpg', 'path': 'К84.jpg'},
    {'name': 'К85.jpg', 'path': 'К85.jpg'},
    {'name': 'К86.jpg', 'path': 'К86.jpg'},
    {'name': 'К87.jpg', 'path': 'К87.jpg'},
    {'name': 'К88.jpg', 'path': 'К88.jpg'},
    {'name': 'К89.jpg', 'path': 'К89.jpg'},
    {'name': 'К90.jpg', 'path': 'К90.jpg'},
    {'name': 'К91.jpg', 'path': 'К91.jpg'},
    {'name': 'К92.jpg', 'path': 'К92.jpg'},
    {'name': 'К93.jpg', 'path': 'К93.jpg'},
    {'name': 'К94.jpg', 'path': 'К94.jpg'},
    {'name': 'К95.jpg', 'path': 'К95.jpg'},
    {'name': 'К96.jpg', 'path': 'К96.jpg'},
    {'name': 'К97.jpg', 'path': 'К97.jpg'},
    {'name': 'К98.jpg', 'path': 'К98.jpg'},
    {'name': 'К99.jpg', 'path': 'К99.jpg'},
    {'name': 'К100.jpg', 'path': 'К100.jpg'},
    {'name': 'К101.jpg', 'path': 'К101.jpg'},
    {'name': 'Stimul_2.xlsx', 'path': 'Stimul_2.xlsx'},
    {'name': 'К1.jpg', 'path': 'К1.jpg'},
    {'name': 'К2.jpg', 'path': 'К2.jpg'},
    {'name': 'К3.jpg', 'path': 'К3.jpg'},
    {'name': 'К4.jpg', 'path': 'К4.jpg'},
    {'name': 'К5.jpg', 'path': 'К5.jpg'},
    {'name': 'К6.jpg', 'path': 'К6.jpg'},
    {'name': 'К7.jpg', 'path': 'К7.jpg'},
    {'name': 'К8.jpg', 'path': 'К8.jpg'},
    {'name': 'К9.jpg', 'path': 'К9.jpg'},
    {'name': 'К10.jpg', 'path': 'К10.jpg'},
    {'name': 'К11.jpg', 'path': 'К11.jpg'},
    {'name': 'К12.jpg', 'path': 'К12.jpg'},
    {'name': 'К13.jpg', 'path': 'К13.jpg'},
    {'name': 'К14.jpg', 'path': 'К14.jpg'},
    {'name': 'К15.jpg', 'path': 'К15.jpg'},
    {'name': 'К16.jpg', 'path': 'К16.jpg'},
    {'name': 'К17.jpg', 'path': 'К17.jpg'},
    {'name': 'К18.jpg', 'path': 'К18.jpg'},
    {'name': 'К19.jpg', 'path': 'К19.jpg'},
    {'name': 'К20.jpg', 'path': 'К20.jpg'},
    {'name': 'К21.jpg', 'path': 'К21.jpg'},
    {'name': 'К22.jpg', 'path': 'К22.jpg'},
    {'name': 'К23.jpg', 'path': 'К23.jpg'},
    {'name': 'К24.jpg', 'path': 'К24.jpg'},
    {'name': 'К25.jpg', 'path': 'К25.jpg'},
    {'name': 'К26.jpg', 'path': 'К26.jpg'},
    {'name': 'К27.jpg', 'path': 'К27.jpg'},
    {'name': 'К28.jpg', 'path': 'К28.jpg'},
    {'name': 'К29.jpg', 'path': 'К29.jpg'},
    {'name': 'К30.jpg', 'path': 'К30.jpg'},
    {'name': 'К31.jpg', 'path': 'К31.jpg'},
    {'name': 'К32.jpg', 'path': 'К32.jpg'},
    {'name': 'К33.jpg', 'path': 'К33.jpg'},
    {'name': 'К34.jpg', 'path': 'К34.jpg'},
    {'name': 'К35.jpg', 'path': 'К35.jpg'},
    {'name': 'К36.jpg', 'path': 'К36.jpg'},
    {'name': 'К37.jpg', 'path': 'К37.jpg'},
    {'name': 'К38.jpg', 'path': 'К38.jpg'},
    {'name': 'К39.jpg', 'path': 'К39.jpg'},
    {'name': 'К40.jpg', 'path': 'К40.jpg'},
    {'name': 'К41.jpg', 'path': 'К41.jpg'},
    {'name': 'К42.jpg', 'path': 'К42.jpg'},
    {'name': 'К43.jpg', 'path': 'К43.jpg'},
    {'name': 'К44.jpg', 'path': 'К44.jpg'},
    {'name': 'К45.jpg', 'path': 'К45.jpg'},
    {'name': 'К46.jpg', 'path': 'К46.jpg'},
    {'name': 'К47.jpg', 'path': 'К47.jpg'},
    {'name': 'К48.jpg', 'path': 'К48.jpg'},
    {'name': 'К49.jpg', 'path': 'К49.jpg'},
    {'name': 'К50.jpg', 'path': 'К50.jpg'},
    {'name': 'К52.jpg', 'path': 'К52.jpg'},
    {'name': 'К53.jpg', 'path': 'К53.jpg'},
    {'name': 'К54.jpg', 'path': 'К54.jpg'},
    {'name': 'К55.jpg', 'path': 'К55.jpg'},
    {'name': 'К56.jpg', 'path': 'К56.jpg'},
    {'name': 'К57.jpg', 'path': 'К57.jpg'},
    {'name': 'К58.jpg', 'path': 'К58.jpg'},
    {'name': 'К59.jpg', 'path': 'К59.jpg'},
    {'name': 'К60.jpg', 'path': 'К60.jpg'},
    {'name': 'К61.jpg', 'path': 'К61.jpg'},
    {'name': 'К62.jpg', 'path': 'К62.jpg'},
    {'name': 'К63.jpg', 'path': 'К63.jpg'},
    {'name': 'К64.jpg', 'path': 'К64.jpg'},
    {'name': 'К65.jpg', 'path': 'К65.jpg'},
    {'name': 'К66.jpg', 'path': 'К66.jpg'},
    {'name': 'К67.jpg', 'path': 'К67.jpg'},
    {'name': 'К68.jpg', 'path': 'К68.jpg'},
    {'name': 'К69.jpg', 'path': 'К69.jpg'},
    {'name': 'К70.jpg', 'path': 'К70.jpg'},
    {'name': 'К71.jpg', 'path': 'К71.jpg'},
    {'name': 'К72.jpg', 'path': 'К72.jpg'},
    {'name': 'К73.jpg', 'path': 'К73.jpg'},
    {'name': 'К74.jpg', 'path': 'К74.jpg'},
    {'name': 'К75.jpg', 'path': 'К75.jpg'},
    {'name': 'К76.jpg', 'path': 'К76.jpg'},
    {'name': 'К77.jpg', 'path': 'К77.jpg'},
    {'name': 'К78.jpg', 'path': 'К78.jpg'},
    {'name': 'К79.jpg', 'path': 'К79.jpg'},
    {'name': 'К80.jpg', 'path': 'К80.jpg'},
    {'name': 'К81.jpg', 'path': 'К81.jpg'},
    {'name': 'К82.jpg', 'path': 'К82.jpg'},
    {'name': 'К83.jpg', 'path': 'К83.jpg'},
    {'name': 'К84.jpg', 'path': 'К84.jpg'},
    {'name': 'К85.jpg', 'path': 'К85.jpg'},
    {'name': 'К86.jpg', 'path': 'К86.jpg'},
    {'name': 'К87.jpg', 'path': 'К87.jpg'},
    {'name': 'К88.jpg', 'path': 'К88.jpg'},
    {'name': 'К89.jpg', 'path': 'К89.jpg'},
    {'name': 'К90.jpg', 'path': 'К90.jpg'},
    {'name': 'К91.jpg', 'path': 'К91.jpg'},
    {'name': 'К92.jpg', 'path': 'К92.jpg'},
    {'name': 'К93.jpg', 'path': 'К93.jpg'},
    {'name': 'К94.jpg', 'path': 'К94.jpg'},
    {'name': 'К95.jpg', 'path': 'К95.jpg'},
    {'name': 'К96.jpg', 'path': 'К96.jpg'},
    {'name': 'К97.jpg', 'path': 'К97.jpg'},
    {'name': 'К98.jpg', 'path': 'К98.jpg'},
    {'name': 'К99.jpg', 'path': 'К99.jpg'},
    {'name': 'К100.jpg', 'path': 'К100.jpg'},
    {'name': 'К101.jpg', 'path': 'К101.jpg'},
    {'name': 'Stimul_3.xlsx', 'path': 'Stimul_3.xlsx'},
    {'name': 'К1.jpg', 'path': 'К1.jpg'},
    {'name': 'К2.jpg', 'path': 'К2.jpg'},
    {'name': 'К3.jpg', 'path': 'К3.jpg'},
    {'name': 'К7.jpg', 'path': 'К7.jpg'},
    {'name': 'К8.jpg', 'path': 'К8.jpg'},
    {'name': 'К9.jpg', 'path': 'К9.jpg'},
    {'name': 'К10.jpg', 'path': 'К10.jpg'},
    {'name': 'К11.jpg', 'path': 'К11.jpg'},
    {'name': 'К12.jpg', 'path': 'К12.jpg'},
    {'name': 'К16.jpg', 'path': 'К16.jpg'},
    {'name': 'К17.jpg', 'path': 'К17.jpg'},
    {'name': 'К18.jpg', 'path': 'К18.jpg'},
    {'name': 'К19.jpg', 'path': 'К19.jpg'},
    {'name': 'К20.jpg', 'path': 'К20.jpg'},
    {'name': 'К21.jpg', 'path': 'К21.jpg'},
    {'name': 'К22.jpg', 'path': 'К22.jpg'},
    {'name': 'К23.jpg', 'path': 'К23.jpg'},
    {'name': 'К24.jpg', 'path': 'К24.jpg'},
    {'name': 'К25.jpg', 'path': 'К25.jpg'},
    {'name': 'К26.jpg', 'path': 'К26.jpg'},
    {'name': 'К27.jpg', 'path': 'К27.jpg'},
    {'name': 'К28.jpg', 'path': 'К28.jpg'},
    {'name': 'К29.jpg', 'path': 'К29.jpg'},
    {'name': 'К33.jpg', 'path': 'К33.jpg'},
    {'name': 'К34.jpg', 'path': 'К34.jpg'},
    {'name': 'К35.jpg', 'path': 'К35.jpg'},
    {'name': 'К36.jpg', 'path': 'К36.jpg'},
    {'name': 'К37.jpg', 'path': 'К37.jpg'},
    {'name': 'К38.jpg', 'path': 'К38.jpg'},
    {'name': 'К40.jpg', 'path': 'К40.jpg'},
    {'name': 'К41.jpg', 'path': 'К41.jpg'},
    {'name': 'К42.jpg', 'path': 'К42.jpg'},
    {'name': 'К43.jpg', 'path': 'К43.jpg'},
    {'name': 'К44.jpg', 'path': 'К44.jpg'},
    {'name': 'К45.jpg', 'path': 'К45.jpg'},
    {'name': 'К46.jpg', 'path': 'К46.jpg'},
    {'name': 'К47.jpg', 'path': 'К47.jpg'},
    {'name': 'К48.jpg', 'path': 'К48.jpg'},
    {'name': 'К49.jpg', 'path': 'К49.jpg'},
    {'name': 'К50.jpg', 'path': 'К50.jpg'},
    {'name': 'К52.jpg', 'path': 'К52.jpg'},
    {'name': 'К53.jpg', 'path': 'К53.jpg'},
    {'name': 'К54.jpg', 'path': 'К54.jpg'},
    {'name': 'К55.jpg', 'path': 'К55.jpg'},
    {'name': 'К56.jpg', 'path': 'К56.jpg'},
    {'name': 'К57.jpg', 'path': 'К57.jpg'},
    {'name': 'К58.jpg', 'path': 'К58.jpg'},
    {'name': 'К59.jpg', 'path': 'К59.jpg'},
    {'name': 'К60.jpg', 'path': 'К60.jpg'},
    {'name': 'К61.jpg', 'path': 'К61.jpg'},
    {'name': 'К62.jpg', 'path': 'К62.jpg'},
    {'name': 'К63.jpg', 'path': 'К63.jpg'},
    {'name': 'К64.jpg', 'path': 'К64.jpg'},
    {'name': 'К65.jpg', 'path': 'К65.jpg'},
    {'name': 'К66.jpg', 'path': 'К66.jpg'},
    {'name': 'К67.jpg', 'path': 'К67.jpg'},
    {'name': 'К68.jpg', 'path': 'К68.jpg'},
    {'name': 'К69.jpg', 'path': 'К69.jpg'},
    {'name': 'К70.jpg', 'path': 'К70.jpg'},
    {'name': 'К71.jpg', 'path': 'К71.jpg'},
    {'name': 'К72.jpg', 'path': 'К72.jpg'},
    {'name': 'К73.jpg', 'path': 'К73.jpg'},
    {'name': 'К74.jpg', 'path': 'К74.jpg'},
    {'name': 'К75.jpg', 'path': 'К75.jpg'},
    {'name': 'К76.jpg', 'path': 'К76.jpg'},
    {'name': 'К77.jpg', 'path': 'К77.jpg'},
    {'name': 'К78.jpg', 'path': 'К78.jpg'},
    {'name': 'К79.jpg', 'path': 'К79.jpg'},
    {'name': 'К80.jpg', 'path': 'К80.jpg'},
    {'name': 'К81.jpg', 'path': 'К81.jpg'},
    {'name': 'К82.jpg', 'path': 'К82.jpg'},
    {'name': 'К83.jpg', 'path': 'К83.jpg'},
    {'name': 'К84.jpg', 'path': 'К84.jpg'},
    {'name': 'К85.jpg', 'path': 'К85.jpg'},
    {'name': 'К86.jpg', 'path': 'К86.jpg'},
    {'name': 'К87.jpg', 'path': 'К87.jpg'},
    {'name': 'К88.jpg', 'path': 'К88.jpg'},
    {'name': 'К89.jpg', 'path': 'К89.jpg'},
    {'name': 'К90.jpg', 'path': 'К90.jpg'},
    {'name': 'К91.jpg', 'path': 'К91.jpg'},
    {'name': 'К92.jpg', 'path': 'К92.jpg'},
    {'name': 'К93.jpg', 'path': 'К93.jpg'},
    {'name': 'К94.jpg', 'path': 'К94.jpg'},
    {'name': 'К95.jpg', 'path': 'К95.jpg'},
    {'name': 'К96.jpg', 'path': 'К96.jpg'},
    {'name': 'К97.jpg', 'path': 'К97.jpg'},
    {'name': 'К98.jpg', 'path': 'К98.jpg'},
    {'name': 'К99.jpg', 'path': 'К99.jpg'},
    {'name': 'К100.jpg', 'path': 'К100.jpg'},
    {'name': 'К101.jpg', 'path': 'К101.jpg'},
    {'name': 'К51.jpg', 'path': 'К51.jpg'},
    {'name': 'Stimul_4.xlsx', 'path': 'Stimul_4.xlsx'},
    {'name': 'К1.jpg', 'path': 'К1.jpg'},
    {'name': 'К2.jpg', 'path': 'К2.jpg'},
    {'name': 'К9.jpg', 'path': 'К9.jpg'},
    {'name': 'К10.jpg', 'path': 'К10.jpg'},
    {'name': 'К11.jpg', 'path': 'К11.jpg'},
    {'name': 'К12.jpg', 'path': 'К12.jpg'},
    {'name': 'К16.jpg', 'path': 'К16.jpg'},
    {'name': 'К17.jpg', 'path': 'К17.jpg'},
    {'name': 'К18.jpg', 'path': 'К18.jpg'},
    {'name': 'К19.jpg', 'path': 'К19.jpg'},
    {'name': 'К26.jpg', 'path': 'К26.jpg'},
    {'name': 'К27.jpg', 'path': 'К27.jpg'},
    {'name': 'К28.jpg', 'path': 'К28.jpg'},
    {'name': 'К29.jpg', 'path': 'К29.jpg'},
    {'name': 'К33.jpg', 'path': 'К33.jpg'},
    {'name': 'К34.jpg', 'path': 'К34.jpg'},
    {'name': 'К35.jpg', 'path': 'К35.jpg'},
    {'name': 'К36.jpg', 'path': 'К36.jpg'},
    {'name': 'К37.jpg', 'path': 'К37.jpg'},
    {'name': 'К38.jpg', 'path': 'К38.jpg'},
    {'name': 'К43.jpg', 'path': 'К43.jpg'},
    {'name': 'К44.jpg', 'path': 'К44.jpg'},
    {'name': 'К45.jpg', 'path': 'К45.jpg'},
    {'name': 'К46.jpg', 'path': 'К46.jpg'},
    {'name': 'К47.jpg', 'path': 'К47.jpg'},
    {'name': 'К48.jpg', 'path': 'К48.jpg'},
    {'name': 'К49.jpg', 'path': 'К49.jpg'},
    {'name': 'К50.jpg', 'path': 'К50.jpg'},
    {'name': 'К52.jpg', 'path': 'К52.jpg'},
    {'name': 'К53.jpg', 'path': 'К53.jpg'},
    {'name': 'К54.jpg', 'path': 'К54.jpg'},
    {'name': 'К55.jpg', 'path': 'К55.jpg'},
    {'name': 'К56.jpg', 'path': 'К56.jpg'},
    {'name': 'К57.jpg', 'path': 'К57.jpg'},
    {'name': 'К58.jpg', 'path': 'К58.jpg'},
    {'name': 'К59.jpg', 'path': 'К59.jpg'},
    {'name': 'К60.jpg', 'path': 'К60.jpg'},
    {'name': 'К61.jpg', 'path': 'К61.jpg'},
    {'name': 'К62.jpg', 'path': 'К62.jpg'},
    {'name': 'К63.jpg', 'path': 'К63.jpg'},
    {'name': 'К64.jpg', 'path': 'К64.jpg'},
    {'name': 'К65.jpg', 'path': 'К65.jpg'},
    {'name': 'К66.jpg', 'path': 'К66.jpg'},
    {'name': 'К67.jpg', 'path': 'К67.jpg'},
    {'name': 'К68.jpg', 'path': 'К68.jpg'},
    {'name': 'К69.jpg', 'path': 'К69.jpg'},
    {'name': 'К70.jpg', 'path': 'К70.jpg'},
    {'name': 'К71.jpg', 'path': 'К71.jpg'},
    {'name': 'К72.jpg', 'path': 'К72.jpg'},
    {'name': 'К73.jpg', 'path': 'К73.jpg'},
    {'name': 'К74.jpg', 'path': 'К74.jpg'},
    {'name': 'К75.jpg', 'path': 'К75.jpg'},
    {'name': 'К76.jpg', 'path': 'К76.jpg'},
    {'name': 'К77.jpg', 'path': 'К77.jpg'},
    {'name': 'К78.jpg', 'path': 'К78.jpg'},
    {'name': 'К79.jpg', 'path': 'К79.jpg'},
    {'name': 'К80.jpg', 'path': 'К80.jpg'},
    {'name': 'К81.jpg', 'path': 'К81.jpg'},
    {'name': 'К82.jpg', 'path': 'К82.jpg'},
    {'name': 'К83.jpg', 'path': 'К83.jpg'},
    {'name': 'К84.jpg', 'path': 'К84.jpg'},
    {'name': 'К85.jpg', 'path': 'К85.jpg'},
    {'name': 'К86.jpg', 'path': 'К86.jpg'},
    {'name': 'К87.jpg', 'path': 'К87.jpg'},
    {'name': 'К88.jpg', 'path': 'К88.jpg'},
    {'name': 'К89.jpg', 'path': 'К89.jpg'},
    {'name': 'К90.jpg', 'path': 'К90.jpg'},
    {'name': 'К91.jpg', 'path': 'К91.jpg'},
    {'name': 'К92.jpg', 'path': 'К92.jpg'},
    {'name': 'К93.jpg', 'path': 'К93.jpg'},
    {'name': 'К94.jpg', 'path': 'К94.jpg'},
    {'name': 'К95.jpg', 'path': 'К95.jpg'},
    {'name': 'К96.jpg', 'path': 'К96.jpg'},
    {'name': 'К97.jpg', 'path': 'К97.jpg'},
    {'name': 'К98.jpg', 'path': 'К98.jpg'},
    {'name': 'К99.jpg', 'path': 'К99.jpg'},
    {'name': 'К100.jpg', 'path': 'К100.jpg'},
    {'name': 'К101.jpg', 'path': 'К101.jpg'},
    {'name': 'К51.jpg', 'path': 'К51.jpg'},
    {'name': 'Stimul_5.xlsx', 'path': 'Stimul_5.xlsx'},
    {'name': 'К1.jpg', 'path': 'К1.jpg'},
    {'name': 'К10.jpg', 'path': 'К10.jpg'},
    {'name': 'К11.jpg', 'path': 'К11.jpg'},
    {'name': 'К12.jpg', 'path': 'К12.jpg'},
    {'name': 'К18.jpg', 'path': 'К18.jpg'},
    {'name': 'К19.jpg', 'path': 'К19.jpg'},
    {'name': 'К26.jpg', 'path': 'К26.jpg'},
    {'name': 'К27.jpg', 'path': 'К27.jpg'},
    {'name': 'К28.jpg', 'path': 'К28.jpg'},
    {'name': 'К29.jpg', 'path': 'К29.jpg'},
    {'name': 'К37.jpg', 'path': 'К37.jpg'},
    {'name': 'К38.jpg', 'path': 'К38.jpg'},
    {'name': 'К43.jpg', 'path': 'К43.jpg'},
    {'name': 'К44.jpg', 'path': 'К44.jpg'},
    {'name': 'К45.jpg', 'path': 'К45.jpg'},
    {'name': 'К50.jpg', 'path': 'К50.jpg'},
    {'name': 'К52.jpg', 'path': 'К52.jpg'},
    {'name': 'К53.jpg', 'path': 'К53.jpg'},
    {'name': 'К54.jpg', 'path': 'К54.jpg'},
    {'name': 'К55.jpg', 'path': 'К55.jpg'},
    {'name': 'К56.jpg', 'path': 'К56.jpg'},
    {'name': 'К57.jpg', 'path': 'К57.jpg'},
    {'name': 'К58.jpg', 'path': 'К58.jpg'},
    {'name': 'К59.jpg', 'path': 'К59.jpg'},
    {'name': 'К60.jpg', 'path': 'К60.jpg'},
    {'name': 'К61.jpg', 'path': 'К61.jpg'},
    {'name': 'К62.jpg', 'path': 'К62.jpg'},
    {'name': 'К63.jpg', 'path': 'К63.jpg'},
    {'name': 'К64.jpg', 'path': 'К64.jpg'},
    {'name': 'К65.jpg', 'path': 'К65.jpg'},
    {'name': 'К66.jpg', 'path': 'К66.jpg'},
    {'name': 'К67.jpg', 'path': 'К67.jpg'},
    {'name': 'К68.jpg', 'path': 'К68.jpg'},
    {'name': 'К69.jpg', 'path': 'К69.jpg'},
    {'name': 'К70.jpg', 'path': 'К70.jpg'},
    {'name': 'К71.jpg', 'path': 'К71.jpg'},
    {'name': 'К72.jpg', 'path': 'К72.jpg'},
    {'name': 'К73.jpg', 'path': 'К73.jpg'},
    {'name': 'К74.jpg', 'path': 'К74.jpg'},
    {'name': 'К75.jpg', 'path': 'К75.jpg'},
    {'name': 'К76.jpg', 'path': 'К76.jpg'},
    {'name': 'К77.jpg', 'path': 'К77.jpg'},
    {'name': 'К78.jpg', 'path': 'К78.jpg'},
    {'name': 'К79.jpg', 'path': 'К79.jpg'},
    {'name': 'К80.jpg', 'path': 'К80.jpg'},
    {'name': 'К81.jpg', 'path': 'К81.jpg'},
    {'name': 'К82.jpg', 'path': 'К82.jpg'},
    {'name': 'К83.jpg', 'path': 'К83.jpg'},
    {'name': 'К84.jpg', 'path': 'К84.jpg'},
    {'name': 'К85.jpg', 'path': 'К85.jpg'},
    {'name': 'К86.jpg', 'path': 'К86.jpg'},
    {'name': 'К87.jpg', 'path': 'К87.jpg'},
    {'name': 'К88.jpg', 'path': 'К88.jpg'},
    {'name': 'К89.jpg', 'path': 'К89.jpg'},
    {'name': 'К90.jpg', 'path': 'К90.jpg'},
    {'name': 'К91.jpg', 'path': 'К91.jpg'},
    {'name': 'К92.jpg', 'path': 'К92.jpg'},
    {'name': 'К93.jpg', 'path': 'К93.jpg'},
    {'name': 'К94.jpg', 'path': 'К94.jpg'},
    {'name': 'К95.jpg', 'path': 'К95.jpg'},
    {'name': 'К96.jpg', 'path': 'К96.jpg'},
    {'name': 'К97.jpg', 'path': 'К97.jpg'},
    {'name': 'К98.jpg', 'path': 'К98.jpg'},
    {'name': 'К99.jpg', 'path': 'К99.jpg'},
    {'name': 'К100.jpg', 'path': 'К100.jpg'},
    {'name': 'К101.jpg', 'path': 'К101.jpg'},
    {'name': 'К51.jpg', 'path': 'К51.jpg'},
    {'name': 'Stimul_6.xlsx', 'path': 'Stimul_6.xlsx'},
    {'name': 'К1.jpg', 'path': 'К1.jpg'},
    {'name': 'К10.jpg', 'path': 'К10.jpg'},
    {'name': 'К11.jpg', 'path': 'К11.jpg'},
    {'name': 'К12.jpg', 'path': 'К12.jpg'},
    {'name': 'К18.jpg', 'path': 'К18.jpg'},
    {'name': 'К19.jpg', 'path': 'К19.jpg'},
    {'name': 'К26.jpg', 'path': 'К26.jpg'},
    {'name': 'К27.jpg', 'path': 'К27.jpg'},
    {'name': 'К28.jpg', 'path': 'К28.jpg'},
    {'name': 'К29.jpg', 'path': 'К29.jpg'},
    {'name': 'К37.jpg', 'path': 'К37.jpg'},
    {'name': 'К38.jpg', 'path': 'К38.jpg'},
    {'name': 'К43.jpg', 'path': 'К43.jpg'},
    {'name': 'К44.jpg', 'path': 'К44.jpg'},
    {'name': 'К45.jpg', 'path': 'К45.jpg'},
    {'name': 'К50.jpg', 'path': 'К50.jpg'},
    {'name': 'К52.jpg', 'path': 'К52.jpg'},
    {'name': 'К53.jpg', 'path': 'К53.jpg'},
    {'name': 'К54.jpg', 'path': 'К54.jpg'},
    {'name': 'К55.jpg', 'path': 'К55.jpg'},
    {'name': 'К56.jpg', 'path': 'К56.jpg'},
    {'name': 'К57.jpg', 'path': 'К57.jpg'},
    {'name': 'К58.jpg', 'path': 'К58.jpg'},
    {'name': 'К59.jpg', 'path': 'К59.jpg'},
    {'name': 'К60.jpg', 'path': 'К60.jpg'},
    {'name': 'К61.jpg', 'path': 'К61.jpg'},
    {'name': 'К62.jpg', 'path': 'К62.jpg'},
    {'name': 'К63.jpg', 'path': 'К63.jpg'},
    {'name': 'К64.jpg', 'path': 'К64.jpg'},
    {'name': 'К65.jpg', 'path': 'К65.jpg'},
    {'name': 'К66.jpg', 'path': 'К66.jpg'},
    {'name': 'К67.jpg', 'path': 'К67.jpg'},
    {'name': 'К68.jpg', 'path': 'К68.jpg'},
    {'name': 'К69.jpg', 'path': 'К69.jpg'},
    {'name': 'К70.jpg', 'path': 'К70.jpg'},
    {'name': 'К71.jpg', 'path': 'К71.jpg'},
    {'name': 'К72.jpg', 'path': 'К72.jpg'},
    {'name': 'К73.jpg', 'path': 'К73.jpg'},
    {'name': 'К74.jpg', 'path': 'К74.jpg'},
    {'name': 'К75.jpg', 'path': 'К75.jpg'},
    {'name': 'К76.jpg', 'path': 'К76.jpg'},
    {'name': 'К77.jpg', 'path': 'К77.jpg'},
    {'name': 'К78.jpg', 'path': 'К78.jpg'},
    {'name': 'К79.jpg', 'path': 'К79.jpg'},
    {'name': 'К80.jpg', 'path': 'К80.jpg'},
    {'name': 'К81.jpg', 'path': 'К81.jpg'},
    {'name': 'К82.jpg', 'path': 'К82.jpg'},
    {'name': 'К83.jpg', 'path': 'К83.jpg'},
    {'name': 'К84.jpg', 'path': 'К84.jpg'},
    {'name': 'К85.jpg', 'path': 'К85.jpg'},
    {'name': 'К86.jpg', 'path': 'К86.jpg'},
    {'name': 'К87.jpg', 'path': 'К87.jpg'},
    {'name': 'К88.jpg', 'path': 'К88.jpg'},
    {'name': 'К89.jpg', 'path': 'К89.jpg'},
    {'name': 'К90.jpg', 'path': 'К90.jpg'},
    {'name': 'К91.jpg', 'path': 'К91.jpg'},
    {'name': 'К92.jpg', 'path': 'К92.jpg'},
    {'name': 'К93.jpg', 'path': 'К93.jpg'},
    {'name': 'К94.jpg', 'path': 'К94.jpg'},
    {'name': 'К95.jpg', 'path': 'К95.jpg'},
    {'name': 'К96.jpg', 'path': 'К96.jpg'},
    {'name': 'К97.jpg', 'path': 'К97.jpg'},
    {'name': 'К98.jpg', 'path': 'К98.jpg'},
    {'name': 'К99.jpg', 'path': 'К99.jpg'},
    {'name': 'К100.jpg', 'path': 'К100.jpg'},
    {'name': 'К101.jpg', 'path': 'К101.jpg'},
    {'name': 'К51.jpg', 'path': 'К51.jpg'},
    {'name': 'Stimul_7.xlsx', 'path': 'Stimul_7.xlsx'},
    {'name': 'К1.jpg', 'path': 'К1.jpg'},
    {'name': 'К12.jpg', 'path': 'К12.jpg'},
    {'name': 'К18.jpg', 'path': 'К18.jpg'},
    {'name': 'К37.jpg', 'path': 'К37.jpg'},
    {'name': 'К38.jpg', 'path': 'К38.jpg'},
    {'name': 'К45.jpg', 'path': 'К45.jpg'},
    {'name': 'К52.jpg', 'path': 'К52.jpg'},
    {'name': 'К53.jpg', 'path': 'К53.jpg'},
    {'name': 'К54.jpg', 'path': 'К54.jpg'},
    {'name': 'К55.jpg', 'path': 'К55.jpg'},
    {'name': 'К56.jpg', 'path': 'К56.jpg'},
    {'name': 'К57.jpg', 'path': 'К57.jpg'},
    {'name': 'К58.jpg', 'path': 'К58.jpg'},
    {'name': 'К59.jpg', 'path': 'К59.jpg'},
    {'name': 'К60.jpg', 'path': 'К60.jpg'},
    {'name': 'К61.jpg', 'path': 'К61.jpg'},
    {'name': 'К62.jpg', 'path': 'К62.jpg'},
    {'name': 'К63.jpg', 'path': 'К63.jpg'},
    {'name': 'К64.jpg', 'path': 'К64.jpg'},
    {'name': 'К65.jpg', 'path': 'К65.jpg'},
    {'name': 'К66.jpg', 'path': 'К66.jpg'},
    {'name': 'К67.jpg', 'path': 'К67.jpg'},
    {'name': 'К68.jpg', 'path': 'К68.jpg'},
    {'name': 'К69.jpg', 'path': 'К69.jpg'},
    {'name': 'К70.jpg', 'path': 'К70.jpg'},
    {'name': 'К71.jpg', 'path': 'К71.jpg'},
    {'name': 'К72.jpg', 'path': 'К72.jpg'},
    {'name': 'К73.jpg', 'path': 'К73.jpg'},
    {'name': 'К74.jpg', 'path': 'К74.jpg'},
    {'name': 'К75.jpg', 'path': 'К75.jpg'},
    {'name': 'К76.jpg', 'path': 'К76.jpg'},
    {'name': 'К77.jpg', 'path': 'К77.jpg'},
    {'name': 'К78.jpg', 'path': 'К78.jpg'},
    {'name': 'К79.jpg', 'path': 'К79.jpg'},
    {'name': 'К80.jpg', 'path': 'К80.jpg'},
    {'name': 'К81.jpg', 'path': 'К81.jpg'},
    {'name': 'К82.jpg', 'path': 'К82.jpg'},
    {'name': 'К83.jpg', 'path': 'К83.jpg'},
    {'name': 'К84.jpg', 'path': 'К84.jpg'},
    {'name': 'К85.jpg', 'path': 'К85.jpg'},
    {'name': 'К86.jpg', 'path': 'К86.jpg'},
    {'name': 'К87.jpg', 'path': 'К87.jpg'},
    {'name': 'К88.jpg', 'path': 'К88.jpg'},
    {'name': 'К89.jpg', 'path': 'К89.jpg'},
    {'name': 'К90.jpg', 'path': 'К90.jpg'},
    {'name': 'К91.jpg', 'path': 'К91.jpg'},
    {'name': 'К92.jpg', 'path': 'К92.jpg'},
    {'name': 'К93.jpg', 'path': 'К93.jpg'},
    {'name': 'К94.jpg', 'path': 'К94.jpg'},
    {'name': 'К95.jpg', 'path': 'К95.jpg'},
    {'name': 'К96.jpg', 'path': 'К96.jpg'},
    {'name': 'К97.jpg', 'path': 'К97.jpg'},
    {'name': 'К98.jpg', 'path': 'К98.jpg'},
    {'name': 'К99.jpg', 'path': 'К99.jpg'},
    {'name': 'К100.jpg', 'path': 'К100.jpg'},
    {'name': 'К101.jpg', 'path': 'К101.jpg'},
    {'name': 'К51.jpg', 'path': 'К51.jpg'},
    {'name': 'Stimul_8.xlsx', 'path': 'Stimul_8.xlsx'},
    {'name': 'К1.jpg', 'path': 'К1.jpg'},
    {'name': 'К12.jpg', 'path': 'К12.jpg'},
    {'name': 'К18.jpg', 'path': 'К18.jpg'},
    {'name': 'К37.jpg', 'path': 'К37.jpg'},
    {'name': 'К38.jpg', 'path': 'К38.jpg'},
    {'name': 'К45.jpg', 'path': 'К45.jpg'},
    {'name': 'К52.jpg', 'path': 'К52.jpg'},
    {'name': 'К53.jpg', 'path': 'К53.jpg'},
    {'name': 'К54.jpg', 'path': 'К54.jpg'},
    {'name': 'К55.jpg', 'path': 'К55.jpg'},
    {'name': 'К56.jpg', 'path': 'К56.jpg'},
    {'name': 'К57.jpg', 'path': 'К57.jpg'},
    {'name': 'К58.jpg', 'path': 'К58.jpg'},
    {'name': 'К59.jpg', 'path': 'К59.jpg'},
    {'name': 'К60.jpg', 'path': 'К60.jpg'},
    {'name': 'К61.jpg', 'path': 'К61.jpg'},
    {'name': 'К62.jpg', 'path': 'К62.jpg'},
    {'name': 'К63.jpg', 'path': 'К63.jpg'},
    {'name': 'К64.jpg', 'path': 'К64.jpg'},
    {'name': 'К65.jpg', 'path': 'К65.jpg'},
    {'name': 'К66.jpg', 'path': 'К66.jpg'},
    {'name': 'К67.jpg', 'path': 'К67.jpg'},
    {'name': 'К68.jpg', 'path': 'К68.jpg'},
    {'name': 'К69.jpg', 'path': 'К69.jpg'},
    {'name': 'К70.jpg', 'path': 'К70.jpg'},
    {'name': 'К71.jpg', 'path': 'К71.jpg'},
    {'name': 'К72.jpg', 'path': 'К72.jpg'},
    {'name': 'К73.jpg', 'path': 'К73.jpg'},
    {'name': 'К74.jpg', 'path': 'К74.jpg'},
    {'name': 'К75.jpg', 'path': 'К75.jpg'},
    {'name': 'К76.jpg', 'path': 'К76.jpg'},
    {'name': 'К77.jpg', 'path': 'К77.jpg'},
    {'name': 'К78.jpg', 'path': 'К78.jpg'},
    {'name': 'К79.jpg', 'path': 'К79.jpg'},
    {'name': 'К80.jpg', 'path': 'К80.jpg'},
    {'name': 'К81.jpg', 'path': 'К81.jpg'},
    {'name': 'К82.jpg', 'path': 'К82.jpg'},
    {'name': 'К83.jpg', 'path': 'К83.jpg'},
    {'name': 'К84.jpg', 'path': 'К84.jpg'},
    {'name': 'К85.jpg', 'path': 'К85.jpg'},
    {'name': 'К86.jpg', 'path': 'К86.jpg'},
    {'name': 'К87.jpg', 'path': 'К87.jpg'},
    {'name': 'К88.jpg', 'path': 'К88.jpg'},
    {'name': 'К89.jpg', 'path': 'К89.jpg'},
    {'name': 'К90.jpg', 'path': 'К90.jpg'},
    {'name': 'К91.jpg', 'path': 'К91.jpg'},
    {'name': 'К92.jpg', 'path': 'К92.jpg'},
    {'name': 'К93.jpg', 'path': 'К93.jpg'},
    {'name': 'К94.jpg', 'path': 'К94.jpg'},
    {'name': 'К95.jpg', 'path': 'К95.jpg'},
    {'name': 'К96.jpg', 'path': 'К96.jpg'},
    {'name': 'К97.jpg', 'path': 'К97.jpg'},
    {'name': 'К98.jpg', 'path': 'К98.jpg'},
    {'name': 'К99.jpg', 'path': 'К99.jpg'},
    {'name': 'К100.jpg', 'path': 'К100.jpg'},
    {'name': 'К101.jpg', 'path': 'К101.jpg'},
    {'name': 'К51.jpg', 'path': 'К51.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionClock;
var instruction_text;
var stop_instruction;
var trialClock;
var key_resp;
var image;
var text_2;
var PauseClock;
var text;
var Text_continius;
var key_continue;
var Pause2Clock;
var Text_pause2;
var Text_cont_pause2;
var key_cont_pause2;
var Pause3Clock;
var Text_pause3;
var Text_cont_pause3;
var key_cont_pause3;
var Pause4Clock;
var Text_pause4;
var Text_cont_pause4;
var key_cont_pause4;
var Pause5Clock;
var Text_pause5;
var Text_cont_pause5;
var key_cont_pause5;
var Pause6Clock;
var Text_pause6;
var Text_cont_pause6;
var key_cont_pause6;
var Pause7Clock;
var Text_cont_pause7;
var key_cont_pause7;
var text_pause_7;
var ExitClock;
var text_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text',
    text: "У цьому експерименті Вам буде протягом короткого часу представлене коло певного кольору. Після демонстрації фігури на екрані з'явиться знак питяння. \nНатисніть'S', якщо вважаєте,що коло було ближче до СИНЬОГО кольору.\nНатисніть 'L', якщо вважаєте,що коло було ближче до ФІОЛЕТОВОГО кольору.\nБудь ласка намагайтесь відповідати швидко і чітко.\nНатисніть будь яку клавішу,щоб розпочати",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0, 0, 0]),  opacity: undefined,
    depth: 0.0 
  });
  
  stop_instruction = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Pause"
  PauseClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Вітаємо! Ви пройшли перший блок. Залишилось всього сім. У Вас є час перепочити 20 секунд.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  Text_continius = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_continius',
    text: 'Натисніть пробіл, щоб продовжити',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_continue = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pause2"
  Pause2Clock = new util.Clock();
  Text_pause2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_pause2',
    text: 'Вітаємо! Ви пройшли другий блок. Залишилось всього шість. У Вас є час перепочити 20 секунд.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  Text_cont_pause2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_cont_pause2',
    text: 'Натисніть пробіл, щоб продовжити',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_cont_pause2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pause3"
  Pause3Clock = new util.Clock();
  Text_pause3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_pause3',
    text: "Вітаємо! Ви пройшли третій блок. Залишилось всього п'ять. У Вас є час перепочити 20 секунд.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  Text_cont_pause3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_cont_pause3',
    text: 'Натисніть пробіл, щоб продовжити',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_cont_pause3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pause4"
  Pause4Clock = new util.Clock();
  Text_pause4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_pause4',
    text: 'Вітаємо! Ви пройшли четвертий блок. Залишилось всього чотири. У Вас є час перепочити 20 секунд.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  Text_cont_pause4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_cont_pause4',
    text: 'Натисніть пробіл, щоб продовжити',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_cont_pause4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pause5"
  Pause5Clock = new util.Clock();
  Text_pause5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_pause5',
    text: "Вітаємо! Ви пройшли п'ятий блок. Залишилось всього три. У Вас є час перепочити 20 секунд.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  Text_cont_pause5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_cont_pause5',
    text: 'Натисніть пробіл, щоб продовжити',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_cont_pause5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pause6"
  Pause6Clock = new util.Clock();
  Text_pause6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_pause6',
    text: 'Вітаємо! Ви пройшли шостий блок. Залишилось всього два. У Вас є час перепочити 20 секунд.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  Text_cont_pause6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_cont_pause6',
    text: 'Натисніть пробіл, щоб продовжити',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_cont_pause6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pause7"
  Pause7Clock = new util.Clock();
  Text_cont_pause7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_cont_pause7',
    text: 'Натисніть пробіл, щоб продовжити',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_cont_pause7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_pause_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_pause_7',
    text: 'Вітаємо! Ви пройшли сьомий блок. Залишився всього один. У Вас є час перепочити 20 секунд.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Exit"
  ExitClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Дуже дякуємо за те, що прийняли участь у нашому експерименті! Ващ приділений час має велике значення для результатів дослідження!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _stop_instruction_allKeys;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instruction.started', globalClock.getTime());
    stop_instruction.keys = undefined;
    stop_instruction.rt = undefined;
    _stop_instruction_allKeys = [];
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instruction_text);
    instructionComponents.push(stop_instruction);
    
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text* updates
    if (t >= 0.0 && instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text.tStart = t;  // (not accounting for frame time here)
      instruction_text.frameNStart = frameN;  // exact frame index
      
      instruction_text.setAutoDraw(true);
    }
    
    
    // *stop_instruction* updates
    if (t >= 1 && stop_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_instruction.tStart = t;  // (not accounting for frame time here)
      stop_instruction.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { stop_instruction.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { stop_instruction.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { stop_instruction.clearEvents(); });
    }
    
    if (stop_instruction.status === PsychoJS.Status.STARTED) {
      let theseKeys = stop_instruction.getKeys({keyList: [], waitRelease: false});
      _stop_instruction_allKeys = _stop_instruction_allKeys.concat(theseKeys);
      if (_stop_instruction_allKeys.length > 0) {
        stop_instruction.keys = _stop_instruction_allKeys[_stop_instruction_allKeys.length - 1].name;  // just the last key pressed
        stop_instruction.rt = _stop_instruction_allKeys[_stop_instruction_allKeys.length - 1].rt;
        stop_instruction.duration = _stop_instruction_allKeys[_stop_instruction_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction.stopped', globalClock.getTime());
    stop_instruction.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_1;
function trials_1LoopBegin(trials_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Stimul_1.xlsx',
      seed: undefined, name: 'trials_1'
    });
    psychoJS.experiment.addLoop(trials_1); // add the loop to the experiment
    currentLoop = trials_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_1.forEach(function() {
      snapshot = trials_1.getSnapshot();
    
      trials_1LoopScheduler.add(importConditions(snapshot));
      trials_1LoopScheduler.add(trialRoutineBegin(snapshot));
      trials_1LoopScheduler.add(trialRoutineEachFrame());
      trials_1LoopScheduler.add(trialRoutineEnd(snapshot));
      trials_1LoopScheduler.add(trials_1LoopEndIteration(trials_1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Stimul_2.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(trialRoutineBegin(snapshot));
      trials_2LoopScheduler.add(trialRoutineEachFrame());
      trials_2LoopScheduler.add(trialRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Stimul_3.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(trialRoutineBegin(snapshot));
      trials_3LoopScheduler.add(trialRoutineEachFrame());
      trials_3LoopScheduler.add(trialRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Stimul_4.xlsx',
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_4.forEach(function() {
      snapshot = trials_4.getSnapshot();
    
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(trialRoutineBegin(snapshot));
      trials_4LoopScheduler.add(trialRoutineEachFrame());
      trials_4LoopScheduler.add(trialRoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_5;
function trials_5LoopBegin(trials_5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Stimul_5.xlsx',
      seed: undefined, name: 'trials_5'
    });
    psychoJS.experiment.addLoop(trials_5); // add the loop to the experiment
    currentLoop = trials_5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_5.forEach(function() {
      snapshot = trials_5.getSnapshot();
    
      trials_5LoopScheduler.add(importConditions(snapshot));
      trials_5LoopScheduler.add(trialRoutineBegin(snapshot));
      trials_5LoopScheduler.add(trialRoutineEachFrame());
      trials_5LoopScheduler.add(trialRoutineEnd(snapshot));
      trials_5LoopScheduler.add(trials_5LoopEndIteration(trials_5LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_5LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_5);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_5LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_6;
function trials_6LoopBegin(trials_6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Stimul_6.xlsx',
      seed: undefined, name: 'trials_6'
    });
    psychoJS.experiment.addLoop(trials_6); // add the loop to the experiment
    currentLoop = trials_6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_6.forEach(function() {
      snapshot = trials_6.getSnapshot();
    
      trials_6LoopScheduler.add(importConditions(snapshot));
      trials_6LoopScheduler.add(trialRoutineBegin(snapshot));
      trials_6LoopScheduler.add(trialRoutineEachFrame());
      trials_6LoopScheduler.add(trialRoutineEnd(snapshot));
      trials_6LoopScheduler.add(trials_6LoopEndIteration(trials_6LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_6LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_6);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_6LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_7;
function trials_7LoopBegin(trials_7LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_7 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Stimul_7.xlsx',
      seed: undefined, name: 'trials_7'
    });
    psychoJS.experiment.addLoop(trials_7); // add the loop to the experiment
    currentLoop = trials_7;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_7.forEach(function() {
      snapshot = trials_7.getSnapshot();
    
      trials_7LoopScheduler.add(importConditions(snapshot));
      trials_7LoopScheduler.add(trialRoutineBegin(snapshot));
      trials_7LoopScheduler.add(trialRoutineEachFrame());
      trials_7LoopScheduler.add(trialRoutineEnd(snapshot));
      trials_7LoopScheduler.add(trials_7LoopEndIteration(trials_7LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_7LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_7);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_7LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_8;
function trials_8LoopBegin(trials_8LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_8 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Stimul_8.xlsx',
      seed: undefined, name: 'trials_8'
    });
    psychoJS.experiment.addLoop(trials_8); // add the loop to the experiment
    currentLoop = trials_8;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_8.forEach(function() {
      snapshot = trials_8.getSnapshot();
    
      trials_8LoopScheduler.add(importConditions(snapshot));
      trials_8LoopScheduler.add(trialRoutineBegin(snapshot));
      trials_8LoopScheduler.add(trialRoutineEachFrame());
      trials_8LoopScheduler.add(trialRoutineEnd(snapshot));
      trials_8LoopScheduler.add(trials_8LoopEndIteration(trials_8LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_8LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_8);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_8LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    image.setImage(Stimul);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(key_resp);
    trialComponents.push(image);
    trialComponents.push(text_2);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp* updates
    if (t >= 0.65 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['s', 'l'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys.map((key) => key.name);  // storing all keys
        key_resp.rt = _key_resp_allKeys.map((key) => key.rt);
        key_resp.duration = _key_resp_allKeys.map((key) => key.duration);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // *text_2* updates
    if (t >= 0.65 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_continue_allKeys;
var PauseComponents;
function PauseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pause' ---
    t = 0;
    PauseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Pause.started', globalClock.getTime());
    key_continue.keys = undefined;
    key_continue.rt = undefined;
    _key_continue_allKeys = [];
    // keep track of which components have finished
    PauseComponents = [];
    PauseComponents.push(text);
    PauseComponents.push(Text_continius);
    PauseComponents.push(key_continue);
    
    PauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PauseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pause' ---
    // get current time
    t = PauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // *Text_continius* updates
    if (t >= 20.0 && Text_continius.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_continius.tStart = t;  // (not accounting for frame time here)
      Text_continius.frameNStart = frameN;  // exact frame index
      
      Text_continius.setAutoDraw(true);
    }
    
    
    // *key_continue* updates
    if (t >= 20.0 && key_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_continue.tStart = t;  // (not accounting for frame time here)
      key_continue.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_continue.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_continue.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_continue.clearEvents(); });
    }
    
    if (key_continue.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_continue.getKeys({keyList: ['space'], waitRelease: false});
      _key_continue_allKeys = _key_continue_allKeys.concat(theseKeys);
      if (_key_continue_allKeys.length > 0) {
        key_continue.keys = _key_continue_allKeys[_key_continue_allKeys.length - 1].name;  // just the last key pressed
        key_continue.rt = _key_continue_allKeys[_key_continue_allKeys.length - 1].rt;
        key_continue.duration = _key_continue_allKeys[_key_continue_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PauseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pause' ---
    PauseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Pause.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_continue.corr, level);
    }
    psychoJS.experiment.addData('key_continue.keys', key_continue.keys);
    if (typeof key_continue.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_continue.rt', key_continue.rt);
        psychoJS.experiment.addData('key_continue.duration', key_continue.duration);
        routineTimer.reset();
        }
    
    key_continue.stop();
    // the Routine "Pause" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_cont_pause2_allKeys;
var Pause2Components;
function Pause2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pause2' ---
    t = 0;
    Pause2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Pause2.started', globalClock.getTime());
    key_cont_pause2.keys = undefined;
    key_cont_pause2.rt = undefined;
    _key_cont_pause2_allKeys = [];
    // keep track of which components have finished
    Pause2Components = [];
    Pause2Components.push(Text_pause2);
    Pause2Components.push(Text_cont_pause2);
    Pause2Components.push(key_cont_pause2);
    
    Pause2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Pause2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pause2' ---
    // get current time
    t = Pause2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Text_pause2* updates
    if (t >= 0.0 && Text_pause2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_pause2.tStart = t;  // (not accounting for frame time here)
      Text_pause2.frameNStart = frameN;  // exact frame index
      
      Text_pause2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_pause2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_pause2.setAutoDraw(false);
    }
    
    // *Text_cont_pause2* updates
    if (t >= 20.0 && Text_cont_pause2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_cont_pause2.tStart = t;  // (not accounting for frame time here)
      Text_cont_pause2.frameNStart = frameN;  // exact frame index
      
      Text_cont_pause2.setAutoDraw(true);
    }
    
    
    // *key_cont_pause2* updates
    if (t >= 20.0 && key_cont_pause2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_cont_pause2.tStart = t;  // (not accounting for frame time here)
      key_cont_pause2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_cont_pause2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_cont_pause2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_cont_pause2.clearEvents(); });
    }
    
    if (key_cont_pause2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_cont_pause2.getKeys({keyList: ['space'], waitRelease: false});
      _key_cont_pause2_allKeys = _key_cont_pause2_allKeys.concat(theseKeys);
      if (_key_cont_pause2_allKeys.length > 0) {
        key_cont_pause2.keys = _key_cont_pause2_allKeys[_key_cont_pause2_allKeys.length - 1].name;  // just the last key pressed
        key_cont_pause2.rt = _key_cont_pause2_allKeys[_key_cont_pause2_allKeys.length - 1].rt;
        key_cont_pause2.duration = _key_cont_pause2_allKeys[_key_cont_pause2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Pause2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pause2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pause2' ---
    Pause2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Pause2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_cont_pause2.corr, level);
    }
    psychoJS.experiment.addData('key_cont_pause2.keys', key_cont_pause2.keys);
    if (typeof key_cont_pause2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_cont_pause2.rt', key_cont_pause2.rt);
        psychoJS.experiment.addData('key_cont_pause2.duration', key_cont_pause2.duration);
        routineTimer.reset();
        }
    
    key_cont_pause2.stop();
    // the Routine "Pause2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_cont_pause3_allKeys;
var Pause3Components;
function Pause3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pause3' ---
    t = 0;
    Pause3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Pause3.started', globalClock.getTime());
    key_cont_pause3.keys = undefined;
    key_cont_pause3.rt = undefined;
    _key_cont_pause3_allKeys = [];
    // keep track of which components have finished
    Pause3Components = [];
    Pause3Components.push(Text_pause3);
    Pause3Components.push(Text_cont_pause3);
    Pause3Components.push(key_cont_pause3);
    
    Pause3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Pause3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pause3' ---
    // get current time
    t = Pause3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Text_pause3* updates
    if (t >= 0.0 && Text_pause3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_pause3.tStart = t;  // (not accounting for frame time here)
      Text_pause3.frameNStart = frameN;  // exact frame index
      
      Text_pause3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_pause3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_pause3.setAutoDraw(false);
    }
    
    // *Text_cont_pause3* updates
    if (t >= 20.0 && Text_cont_pause3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_cont_pause3.tStart = t;  // (not accounting for frame time here)
      Text_cont_pause3.frameNStart = frameN;  // exact frame index
      
      Text_cont_pause3.setAutoDraw(true);
    }
    
    
    // *key_cont_pause3* updates
    if (t >= 20.0 && key_cont_pause3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_cont_pause3.tStart = t;  // (not accounting for frame time here)
      key_cont_pause3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_cont_pause3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_cont_pause3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_cont_pause3.clearEvents(); });
    }
    
    if (key_cont_pause3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_cont_pause3.getKeys({keyList: ['space'], waitRelease: false});
      _key_cont_pause3_allKeys = _key_cont_pause3_allKeys.concat(theseKeys);
      if (_key_cont_pause3_allKeys.length > 0) {
        key_cont_pause3.keys = _key_cont_pause3_allKeys[_key_cont_pause3_allKeys.length - 1].name;  // just the last key pressed
        key_cont_pause3.rt = _key_cont_pause3_allKeys[_key_cont_pause3_allKeys.length - 1].rt;
        key_cont_pause3.duration = _key_cont_pause3_allKeys[_key_cont_pause3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Pause3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pause3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pause3' ---
    Pause3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Pause3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_cont_pause3.corr, level);
    }
    psychoJS.experiment.addData('key_cont_pause3.keys', key_cont_pause3.keys);
    if (typeof key_cont_pause3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_cont_pause3.rt', key_cont_pause3.rt);
        psychoJS.experiment.addData('key_cont_pause3.duration', key_cont_pause3.duration);
        routineTimer.reset();
        }
    
    key_cont_pause3.stop();
    // the Routine "Pause3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_cont_pause4_allKeys;
var Pause4Components;
function Pause4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pause4' ---
    t = 0;
    Pause4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Pause4.started', globalClock.getTime());
    key_cont_pause4.keys = undefined;
    key_cont_pause4.rt = undefined;
    _key_cont_pause4_allKeys = [];
    // keep track of which components have finished
    Pause4Components = [];
    Pause4Components.push(Text_pause4);
    Pause4Components.push(Text_cont_pause4);
    Pause4Components.push(key_cont_pause4);
    
    Pause4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Pause4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pause4' ---
    // get current time
    t = Pause4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Text_pause4* updates
    if (t >= 0.0 && Text_pause4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_pause4.tStart = t;  // (not accounting for frame time here)
      Text_pause4.frameNStart = frameN;  // exact frame index
      
      Text_pause4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_pause4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_pause4.setAutoDraw(false);
    }
    
    // *Text_cont_pause4* updates
    if (t >= 20.0 && Text_cont_pause4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_cont_pause4.tStart = t;  // (not accounting for frame time here)
      Text_cont_pause4.frameNStart = frameN;  // exact frame index
      
      Text_cont_pause4.setAutoDraw(true);
    }
    
    
    // *key_cont_pause4* updates
    if (t >= 20.0 && key_cont_pause4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_cont_pause4.tStart = t;  // (not accounting for frame time here)
      key_cont_pause4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_cont_pause4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_cont_pause4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_cont_pause4.clearEvents(); });
    }
    
    if (key_cont_pause4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_cont_pause4.getKeys({keyList: ['space'], waitRelease: false});
      _key_cont_pause4_allKeys = _key_cont_pause4_allKeys.concat(theseKeys);
      if (_key_cont_pause4_allKeys.length > 0) {
        key_cont_pause4.keys = _key_cont_pause4_allKeys[_key_cont_pause4_allKeys.length - 1].name;  // just the last key pressed
        key_cont_pause4.rt = _key_cont_pause4_allKeys[_key_cont_pause4_allKeys.length - 1].rt;
        key_cont_pause4.duration = _key_cont_pause4_allKeys[_key_cont_pause4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Pause4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pause4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pause4' ---
    Pause4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Pause4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_cont_pause4.corr, level);
    }
    psychoJS.experiment.addData('key_cont_pause4.keys', key_cont_pause4.keys);
    if (typeof key_cont_pause4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_cont_pause4.rt', key_cont_pause4.rt);
        psychoJS.experiment.addData('key_cont_pause4.duration', key_cont_pause4.duration);
        routineTimer.reset();
        }
    
    key_cont_pause4.stop();
    // the Routine "Pause4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_cont_pause5_allKeys;
var Pause5Components;
function Pause5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pause5' ---
    t = 0;
    Pause5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Pause5.started', globalClock.getTime());
    key_cont_pause5.keys = undefined;
    key_cont_pause5.rt = undefined;
    _key_cont_pause5_allKeys = [];
    // keep track of which components have finished
    Pause5Components = [];
    Pause5Components.push(Text_pause5);
    Pause5Components.push(Text_cont_pause5);
    Pause5Components.push(key_cont_pause5);
    
    Pause5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Pause5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pause5' ---
    // get current time
    t = Pause5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Text_pause5* updates
    if (t >= 0.0 && Text_pause5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_pause5.tStart = t;  // (not accounting for frame time here)
      Text_pause5.frameNStart = frameN;  // exact frame index
      
      Text_pause5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_pause5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_pause5.setAutoDraw(false);
    }
    
    // *Text_cont_pause5* updates
    if (t >= 20.0 && Text_cont_pause5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_cont_pause5.tStart = t;  // (not accounting for frame time here)
      Text_cont_pause5.frameNStart = frameN;  // exact frame index
      
      Text_cont_pause5.setAutoDraw(true);
    }
    
    
    // *key_cont_pause5* updates
    if (t >= 20.0 && key_cont_pause5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_cont_pause5.tStart = t;  // (not accounting for frame time here)
      key_cont_pause5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_cont_pause5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_cont_pause5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_cont_pause5.clearEvents(); });
    }
    
    if (key_cont_pause5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_cont_pause5.getKeys({keyList: ['space'], waitRelease: false});
      _key_cont_pause5_allKeys = _key_cont_pause5_allKeys.concat(theseKeys);
      if (_key_cont_pause5_allKeys.length > 0) {
        key_cont_pause5.keys = _key_cont_pause5_allKeys[_key_cont_pause5_allKeys.length - 1].name;  // just the last key pressed
        key_cont_pause5.rt = _key_cont_pause5_allKeys[_key_cont_pause5_allKeys.length - 1].rt;
        key_cont_pause5.duration = _key_cont_pause5_allKeys[_key_cont_pause5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Pause5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pause5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pause5' ---
    Pause5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Pause5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_cont_pause5.corr, level);
    }
    psychoJS.experiment.addData('key_cont_pause5.keys', key_cont_pause5.keys);
    if (typeof key_cont_pause5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_cont_pause5.rt', key_cont_pause5.rt);
        psychoJS.experiment.addData('key_cont_pause5.duration', key_cont_pause5.duration);
        routineTimer.reset();
        }
    
    key_cont_pause5.stop();
    // the Routine "Pause5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_cont_pause6_allKeys;
var Pause6Components;
function Pause6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pause6' ---
    t = 0;
    Pause6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Pause6.started', globalClock.getTime());
    key_cont_pause6.keys = undefined;
    key_cont_pause6.rt = undefined;
    _key_cont_pause6_allKeys = [];
    // keep track of which components have finished
    Pause6Components = [];
    Pause6Components.push(Text_pause6);
    Pause6Components.push(Text_cont_pause6);
    Pause6Components.push(key_cont_pause6);
    
    Pause6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Pause6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pause6' ---
    // get current time
    t = Pause6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Text_pause6* updates
    if (t >= 0.0 && Text_pause6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_pause6.tStart = t;  // (not accounting for frame time here)
      Text_pause6.frameNStart = frameN;  // exact frame index
      
      Text_pause6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_pause6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_pause6.setAutoDraw(false);
    }
    
    // *Text_cont_pause6* updates
    if (t >= 20.0 && Text_cont_pause6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_cont_pause6.tStart = t;  // (not accounting for frame time here)
      Text_cont_pause6.frameNStart = frameN;  // exact frame index
      
      Text_cont_pause6.setAutoDraw(true);
    }
    
    
    // *key_cont_pause6* updates
    if (t >= 20.0 && key_cont_pause6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_cont_pause6.tStart = t;  // (not accounting for frame time here)
      key_cont_pause6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_cont_pause6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_cont_pause6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_cont_pause6.clearEvents(); });
    }
    
    if (key_cont_pause6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_cont_pause6.getKeys({keyList: ['space'], waitRelease: false});
      _key_cont_pause6_allKeys = _key_cont_pause6_allKeys.concat(theseKeys);
      if (_key_cont_pause6_allKeys.length > 0) {
        key_cont_pause6.keys = _key_cont_pause6_allKeys[_key_cont_pause6_allKeys.length - 1].name;  // just the last key pressed
        key_cont_pause6.rt = _key_cont_pause6_allKeys[_key_cont_pause6_allKeys.length - 1].rt;
        key_cont_pause6.duration = _key_cont_pause6_allKeys[_key_cont_pause6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Pause6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pause6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pause6' ---
    Pause6Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Pause6.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_cont_pause6.corr, level);
    }
    psychoJS.experiment.addData('key_cont_pause6.keys', key_cont_pause6.keys);
    if (typeof key_cont_pause6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_cont_pause6.rt', key_cont_pause6.rt);
        psychoJS.experiment.addData('key_cont_pause6.duration', key_cont_pause6.duration);
        routineTimer.reset();
        }
    
    key_cont_pause6.stop();
    // the Routine "Pause6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_cont_pause7_allKeys;
var Pause7Components;
function Pause7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pause7' ---
    t = 0;
    Pause7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Pause7.started', globalClock.getTime());
    key_cont_pause7.keys = undefined;
    key_cont_pause7.rt = undefined;
    _key_cont_pause7_allKeys = [];
    // keep track of which components have finished
    Pause7Components = [];
    Pause7Components.push(Text_cont_pause7);
    Pause7Components.push(key_cont_pause7);
    Pause7Components.push(text_pause_7);
    
    Pause7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Pause7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pause7' ---
    // get current time
    t = Pause7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Text_cont_pause7* updates
    if (t >= 20.0 && Text_cont_pause7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_cont_pause7.tStart = t;  // (not accounting for frame time here)
      Text_cont_pause7.frameNStart = frameN;  // exact frame index
      
      Text_cont_pause7.setAutoDraw(true);
    }
    
    
    // *key_cont_pause7* updates
    if (t >= 20.0 && key_cont_pause7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_cont_pause7.tStart = t;  // (not accounting for frame time here)
      key_cont_pause7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_cont_pause7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_cont_pause7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_cont_pause7.clearEvents(); });
    }
    
    if (key_cont_pause7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_cont_pause7.getKeys({keyList: ['space'], waitRelease: false});
      _key_cont_pause7_allKeys = _key_cont_pause7_allKeys.concat(theseKeys);
      if (_key_cont_pause7_allKeys.length > 0) {
        key_cont_pause7.keys = _key_cont_pause7_allKeys[_key_cont_pause7_allKeys.length - 1].name;  // just the last key pressed
        key_cont_pause7.rt = _key_cont_pause7_allKeys[_key_cont_pause7_allKeys.length - 1].rt;
        key_cont_pause7.duration = _key_cont_pause7_allKeys[_key_cont_pause7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_pause_7* updates
    if (t >= 0.0 && text_pause_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_pause_7.tStart = t;  // (not accounting for frame time here)
      text_pause_7.frameNStart = frameN;  // exact frame index
      
      text_pause_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_pause_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_pause_7.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Pause7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pause7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pause7' ---
    Pause7Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Pause7.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_cont_pause7.corr, level);
    }
    psychoJS.experiment.addData('key_cont_pause7.keys', key_cont_pause7.keys);
    if (typeof key_cont_pause7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_cont_pause7.rt', key_cont_pause7.rt);
        psychoJS.experiment.addData('key_cont_pause7.duration', key_cont_pause7.duration);
        routineTimer.reset();
        }
    
    key_cont_pause7.stop();
    // the Routine "Pause7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ExitComponents;
function ExitRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Exit' ---
    t = 0;
    ExitClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Exit.started', globalClock.getTime());
    // keep track of which components have finished
    ExitComponents = [];
    ExitComponents.push(text_3);
    
    ExitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ExitRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Exit' ---
    // get current time
    t = ExitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ExitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ExitRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Exit' ---
    ExitComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Exit.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
