import { useEffect, useMemo, type FC } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { routPaths } from '../../consts/routPaths';
import { decodeFromUrl, encodeToUrl } from '../../utils/createChain';
import './ResultPage.css';
import ClipboardIcon from '../../assets/clipboard.svg?react';
import { useNames } from '../../store/names';
import { Paper } from '../../components/Paper/Paper';

type Data = {
  names: string[];
  shift: number;
};

export const ResultPage: FC = () => {
  const [searchParams] = useSearchParams();
  const basePath = window.location.href.match(/.+#/)![0];

  const { setNames } = useNames();

  const { names, shift } = useMemo(() => {
    const param = searchParams.get('v');

    if (param) {
      return decodeFromUrl<Data>(param);
    }

    return { names: [], shift: 0 };
  }, [searchParams]);

  useEffect(() => {
    if (names.length) {
      setNames(names);
    }
  }, [names, setNames]);

  return (
    <div className="result-page">
      <h2 className="result-page__title">Распределение подарков</h2>
      <Paper className='result-page__paper'>
        <ul className="result-page__list">
        {names.map((name, i) => {
          const target = names[(i + shift) % names.length];
          const link = routPaths.person + '?v=' + encodeToUrl({ name, target });
          return (
            <li className="result-page__item">
              <div className="result-page__item-text">
                <div>{name}</div>&nbsp;
                <div>{' дарит ->'}</div>&nbsp;
                <div>{target}</div>
              </div>
              <Link to={link}>Ссылка для {name}</Link>
              <button
                className="result-page__item-button"
                onClick={() => navigator.clipboard.writeText(basePath + link)}
              >
                <ClipboardIcon />
              </button>
            </li>
          );
        })}
      </ul>
      </Paper>
      <Link className="result-page__home-link" to={routPaths.home}>{'<- изменить список'}</Link>
    </div>
  );
};

// TODO: обрабатывать некорректные ссылки
