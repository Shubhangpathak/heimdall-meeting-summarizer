from faster_whisper import WhisperModel
import time

# audio_file = "./sound-recorder/output.wav"
audio_file = "./output.wav"

print("Transcribing...")
model = WhisperModel("base", device="cpu", compute_type="int8")

segments, info = model.transcribe(audio_file, beam_size=5)

for segment in segments:
    print(f"[{segment.start:.2f}s -> {segment.end:.2f}s] {segment.text}")
print("Done! Sucessfully")