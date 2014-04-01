//dataset information

//Preprocessing
var datasetDescription = new Object();

datasetDescription["keyboard"] = "In this experiment, three types of keyboard layouts are compared (QWERTY, DVORAK, and i10). The experiment follows a between-groups design. For each participant, the typing speed (in words per minute) and the errors (in number of errors per minute) are measured. Following the experiment, we also get the satisfaction rating from the participant. The gender of the participant is also considered as an independent variable.";
datasetDescription["food"] = "We compare the effect of different types of food on the participant' test scores. The foods considered are plain yoghurt, a snickers bar, and a sandwich. We measure the verbal (language) and the quantitative (math) scores of the participant. Since the same set of participants are used for different conditions (foodEaten), this experiment follows a within-groups design. Following the experiment, we also get the satisfaction rating from the participant. The gender of the participant is also considered as an independent variable.";
datasetDescription["weightLoss"] = "Does skipping a meal lead to weight loss? If so, does it vary for different meals? In this experiment, we compare the weight lost by participants under four different conditions: skip breakfast, skip lunch, skip dinner, and control. We measured the amount of weight lost (positive value means that weight was lost) and the absolute BMI after 3 months. The experiment follows a between-group design. Following the experiment, we also get the satisfaction rating from the participant. The amount of exercise of the participant is also considered as an independent variable.";
datasetDescription["phoneOS"] = "In this experiment, we compare three different types of phone operating systems for their emotional impact on the users. In particular, we measure the stress and happiness levels of the user after using the phone OS for 6 months. The scores are out of 100 and are based on heuristics. Since we used the same set of participants for different conditions (phone OS), this experiment follows a within-groups design. Following the experiment, we also get the satisfaction rating from the participant. The gender of the participant is also considered as an independent variable.";

var variablesInDataset = new Object();

variablesInDataset["keyboard"] = ["participantID", "keyboardLayout", "gender", "typingSpeed", "errors", "userSatisfaction"];
variablesInDataset["food"] = ["participantID","foodEaten","gender","score_V","score_Q","satisfactionRating"];
variablesInDataset["weightLoss"] = ["participantID","condition","exercise","weightLost","BMI","userRating"];
variablesInDataset["phoneOS"] = ["participantID","phoneOS","gender", "stressScore","happScore","satisfaction"];
 
var roles = ["participant", "dependent", "independent"];

var variableRolesInDataset = new Object();

variableRolesInDataset["keyboard"] = [roles[0], roles[2], roles[2], roles[1], roles[1], roles[1]];
variableRolesInDataset"food"] = [roles[0], roles[2], roles[2], roles[1], roles[1], roles[1]];
variableRolesInDataset["weightLoss"] = [roles[0], roles[2], roles[2], roles[1], roles[1], roles[1]];
variableRolesInDataset["phoneOS"] = [roles[0], roles[2], roles[2], roles[1], roles[1], roles[1]];

var dataTypes = ["nominal", "ordinal", "interval", "ratio"];

var variablesInDatasetType = new Object();

variableTypesInDataset["keyboard"] = [dataTypes[0], dataTypes[0], dataTypes[0], dataTypes[3], dataTypes[3], dataTypes[1]];
variablesInDatasetType["food"] = [dataTypes[0], dataTypes[0], dataTypes[0], dataTypes[3], dataTypes[3], dataTypes[1]];
variablesInDatasetType["weightLoss"] = [dataTypes[0], dataTypes[0], dataTypes[1], dataTypes[3], dataTypes[2], dataTypes[1]];
variablesInDatasetType["phoneOS"] = [dataTypes[0], dataTypes[0], dataTypes[0], dataTypes[3], dataTypes[3], dataTypes[1]];
    
// function initVariablesInDatasetTypes()