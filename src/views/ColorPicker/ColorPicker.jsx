import Display from '../../components/Display/Display';
import useColorPicker from '../../hooks/useColorPicker.js';
import useAffirmation from '../../hooks/useAffirmation.js';
import styles from './ColorPicker.css';

export default function ColorPicker() {
  const { fgColor, bgColor, didChangeColor, handleChange, content } =
    useColorPicker();
  //affirmation is based off the color so useColorPicker must go first
  const { affirmation } = useAffirmation({ bgColor, fgColor });

  return (
    <>
      <fieldset className={styles.colorPickerForm}>
        <legend>
          {didChangeColor
            ? affirmation
            : 'Pick some colors and a message to display!'}
        </legend>
        <input
          type="color"
          name="fgColor"
          aria-label="foreground color"
          value={fgColor}
          onChange={handleChange}
        />
        <input
          type="color"
          name="bgColor"
          aria-label="background color"
          value={bgColor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          aria-label="content"
          value={content}
          onChange={handleChange}
        />
      </fieldset>
      <Display content={content} bgColor={bgColor} fgColor={fgColor} />
    </>
  );
}
