import { type FC, useState, useEffect } from 'react';
import { Button, Modal, Input, Avatar, Typography } from 'antd';

import messagesResponse from '../../data/messages.json';
import type { MessagesResponse } from '../types';

interface MessagesModalProps {
  /**
   * Flag to indicate the modal is open or closed
   */
  open: boolean;

  /**
   * Function to be called to close the modal
   */
  closeModal: () => void;
}

const { Search } = Input;
const { Paragraph } = Typography;

const MessagesModal: FC<MessagesModalProps> = ({ open, closeModal }) => {
  const [messages, setMessages] = useState<MessagesResponse>();

  useEffect(() => {
    setTimeout(() => {
      setMessages(messagesResponse);
    }, 200);
  }, []);

  return (
    <Modal
      title="Messages"
      open={open}
      onCancel={closeModal}
      footer={[
        <Button key="save" type="primary">
          View all messages
        </Button>,
      ]}>
      <Search placeholder="Search messages..." allowClear />

      {messages?.map(({ id, date, message, name, avatar }) => (
        <div key={id} className="message-container">
          <div>
            <Avatar>{avatar}</Avatar>
          </div>
          <div className="message">
            <div className="message-title">
              <p className="md semi-bold">{name}</p>
              <p className="sm secondary">{date}</p>
            </div>
            <Paragraph ellipsis>{message}</Paragraph>
          </div>
        </div>
      ))}
    </Modal>
  );
};

export default MessagesModal;
