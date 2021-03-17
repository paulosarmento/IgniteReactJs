interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    htm_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name} </strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.htm_url}>Acessar Repositório</a>
    </li>
  );
}
