import { useMemo, type FC } from "react";
import { useSearchParams } from "react-router-dom";
import { decodeFromUrl } from "../../utils/createChain";
import './PersonPage.css';

type Data = {
  name: string;
  target: string;
}

export const PersonPage: FC = () => {
  const [searchParams] = useSearchParams();

  const { name, target } = useMemo(() => {
    const param = searchParams.get('v');

    if (param) {
      return decodeFromUrl<Data>(param);
    }

    return { name: '', target: '' };
  }, [searchParams]);
  
  return (
    <div className="person-page">
      <h2>Здравствуйте, {name}</h2>
      <p>ваша цель:</p>
      <div className="target">{target}</div>
    </div>
  )
}