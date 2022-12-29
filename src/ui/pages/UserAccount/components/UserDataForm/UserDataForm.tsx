import React from 'react';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

import mailImage from './images/mailInput.svg';
import userImage from './images/userInput.svg';

import StyledUserDataForm from './UserDataForm.style';

const UserDataForm: React.FC = () => {
  const [formState, setFormState] = React.useState<boolean>(false);

  return (
    <StyledUserDataForm>
      {formState
        ? (
          <div>
            <h3>
              Personal information
            </h3>
            <button
              type="button"
              onClick={() => setFormState(!formState)}
            >
              Change information
            </button>
            <form action="">
              <Input
                placeholder="fucking pidr"
                label="Your name"
                type="text"
                alt="human image"
                src={mailImage}
              />
              <Input
                placeholder="picka@mail.com"
                label="Your email"
                type="email"
                alt="envelope  image"
                src={userImage}
              />
            </form>
          </div>
        )
        : (
          <div>
            <h3>
              Personal information
            </h3>
            <button
              type="button"
              onClick={() => setFormState(!formState)}
            >
              Change information
            </button>
            <form action="#">
              <Input
                placeholder="fucking pidr"
                label="Your name"
                type="text"
                alt="human image"
                src={mailImage}
              />
              <Input
                placeholder="picka@mail.com"
                label="Your email"
                type="email"
                alt="envelope  image"
                src={userImage}

              />
              <Button
                type="button"
                className="confirm-button"
               >Confirm
              </Button>
            </form>
          </div>
        )
      }
    </StyledUserDataForm>
  );
};

export default UserDataForm;
