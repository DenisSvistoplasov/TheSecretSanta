import { useCallback, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { NameList } from './NameList';
import { useNames } from '../../store/names';
import { encodeToUrl } from '../../utils/createChain';
import { routPaths } from '../../consts/routPaths';

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const { names } = useNames();

  const calc = useCallback(() => {
    const nonEmptyNames = names.filter((name) => name);

    const encoded = encodeToUrl({
      names: nonEmptyNames,
      shift: Math.floor(Math.random() * (nonEmptyNames.length - 1)) + 1,
    });

    navigate({ pathname: routPaths.result, search: '?v=' + encoded });
  }, [names, navigate]);

  return (
    <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
        <h2>Введите имена участников</h2>
      <NameList />
      <button onClick={calc} style={{textTransform:'uppercase'}}>распределить</button>
    </div>
  );
};
