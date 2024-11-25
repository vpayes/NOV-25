let handPose;
function preload() {
    handPose = ml5.handPose();
  }
 
  let video;
  function setup() {
    createCanvas(640, 480);
   // Create the video and hide it
   video = createCapture(VIDEO);
   video.size(640, 480);
   video.hide();
   handPose.detectStart(video, gotHands);
 }
 let hands = [];
 
  // Callback function for when handPose outputs data
function gotHands(results) {
    // Save the output to the hands variable
    hands = results;
  }
  function draw() {
    image(video, 0, 0, width, height);
    // Draw all the tracked hand points
    for (let i = 0; i < hands.length; i++) {
        let hand = hands[i];
        for (let j = 0; j < hand.keypoints.length; j++) {
            let keypoint = hand.keypoints[j];
            fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }
}
const handPose = ml5.handPose(?options, ?callback);
{
    maxHands: 2,
    flipped: false,
    runtime: "tfjs",
    modelType: "full",
    detectorModelUrl: undefined, //default to use the tf.hub model
    landmarkModelUrl: undefined, //default to use the tf.hub model
  }
  handPose.detectStart(media, callback);
  [
    {
      confidence,
      handedness,
      keypoints: [{ x, y, confidence, name }, ...],
      keypoints3D: [{ x, y, z, confidence, name }, ...],
      index_finger_dip: { x, y, x3D, y3D, z3D },
      index_finger_mcp: { x, y, x3D, y3D, z3D },
      ...
    }
    ...
  ]
  handPose.detectStop();
// Toggle detection when mouse is pressed
function mousePressed() {
    toggleDetection();
  }
  
  // Call this function to start and stop detection
  function toggleDetection() {
    if (isDetecting) {
      handPose.detectStop();
      isDetecting = false;
    } else {
      handPose.detectStart(video, gotHands);
      isDetecting = true;
    }
  }
  handPose.detect(media, ?callback);
  const connections;
  function setup() {
    ...
    connections = handPose.getConnections();
    ...
  }
  [[0, 1], [1, 2], [2, 3], ...[17, 18], [18, 19], [19, 20]];
