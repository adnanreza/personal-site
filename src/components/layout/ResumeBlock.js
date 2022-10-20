import React from 'react';

const ResumeBlock = ({
  heading,
  subheading,
  techStack,
  buttons,
  body,
  list,
  links,
  docLink1,
  docLink2,
  docLink1Name,
  docLink2Name,
  gitLink,
  demoLink,
  editButton,
  deleteButton,
  onEdit,
  onDelete,
  dark,
}) => {
  const array = Array.from(body);

  return (
    <div style={style} className={dark ? 'card darken-1 cardAnimation-dark': 'card darken-1 cardAnimation'}>
      <div className='card-content'>
        <span className='card-title'>
          {heading}
          {` `}
          {techStack && <i class={techStack}></i>}
        </span>
        <span>{subheading}</span>
        <br />
        <br />
        {buttons && (
          <div className='row' style={buttonsRow}>
            {buttons}
          </div>
        )}
        {list ? (
          <ul className='accomplishments'>
            {array.map((item, index) => (
              <li key={index}>
                <i className='far fa-check-circle'></i>
                {`  `}
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div>{body}</div>
        )}
      </div>
      {links && (
        <div className='card-action'>
          <div className='row' style={buttonLinkContainer}>
            {gitLink && (
              <div style={buttonLink}>
                <a
                  href={gitLink}
                  className='waves-effect waves-light btn'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={buttonStyle}
                >
                  <i className='fab fa-github'></i>{' '}
                  <span className='network-name'>Github</span>
                </a>
              </div>
            )}
            {demoLink && (
              <div style={buttonLink}>
                <a
                  href={demoLink}
                  className='waves-effect waves-light btn'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={buttonStyle}
                >
                  <i className='fas fa-desktop'></i>{' '}
                  <span className='network-name'>DEMO</span>
                </a>
              </div>
            )}
            {docLink1 && (
              <div style={buttonLink}>
                <a
                  href={docLink1}
                  className='waves-effect waves-light btn'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={buttonStyle}
                >
                  <i className='fas fa-file'></i>{' '}
                  <span className='network-name'>REDUX</span>
                </a>
              </div>
            )}
            {docLink2 && (
              <div style={buttonLink}>
                <a
                  href={docLink2}
                  className='waves-effect waves-light btn'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={buttonStyle}
                >
                  <i className='fas fa-file'></i>{' '}
                  <span className='network-name'>{docLink2Name}</span>
                </a>
              </div>
            )}
            {editButton && (
              <div style={buttonLink}>
                <button
                  className='waves-effect waves-light btn'
                  style={buttonStyle}
                  onClick={onEdit}
                >
                  <i className='fas fa-edit'></i>{' '}
                  <span className='network-name'>EDIT</span>
                </button>
              </div>
            )}
            {deleteButton && (
              <div style={buttonLink}>
                <button
                  className='waves-effect waves-light btn'
                  style={buttonStyle}
                  onClick={onDelete}
                >
                  <i class='fas fa-trash-alt'></i>{' '}
                  <span className='network-name'>DELETE</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const style = {
  backgroundColor: 'rgba(243, 246, 247, 1)',
};

const buttonLinkContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'left',
};

const buttonsRow = {
  padding: '0 10px',
};

const buttonLink = {
  padding: '0.5rem 0.4rem',
  flexShrink: 1,
};

const buttonStyle = {
  borderRadius: '4px',
  backgroundColor: 'rgb(61, 59, 59)',
};

export default ResumeBlock;
