import { useCallback, type FC, type KeyboardEvent } from 'react';
import { useNames } from '../../store/names';
import './NameList.css';
import { Paper } from '../../components/Paper/Paper';

export const NameList: FC = () => {
  const { names, addName, deleteName, updateName } = useNames();

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        addName();
      }
    },
    [addName]
  );

  return (
    <Paper>
      <ul className="name-list">
        {names.map((name, index) => (
          <li className="name-list__item">
            <input
              className="name-list__input"
              autoFocus
              value={name}
              onChange={(e) => updateName(index, e.target.value)}
              onKeyDown={onKeyDown}
            />
            {names.length > 1 && (
              <button
                className="name-list__delete_btn"
                onClick={() => deleteName(index)}
              >
                -
              </button>
            )}
          </li>
        ))}
        <li>
          <button className="name-list__add_btn" onClick={addName}>
            +
          </button>
        </li>
      </ul>
    </Paper>
  );
};
