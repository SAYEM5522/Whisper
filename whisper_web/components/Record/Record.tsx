import { invokeSaveAsDialog } from "recordrtc";
import { useRecorderPermission } from "./useRecorderPermission";
 const Record = () => {
  const recorder = useRecorderPermission("audio");
  const startRecording = async () => {
    recorder.startRecording();
  };
  const stopRecording = async () => {
    await recorder.stopRecording();
    let blob = await recorder.getBlob();
    invokeSaveAsDialog(blob, `random_name.webm`);
  };
  return (
    <div>
      <button onClick={startRecording}> Start recording</button>
      <button onClick={stopRecording}> Stop recording</button>
    </div>
  );
};
export default Record