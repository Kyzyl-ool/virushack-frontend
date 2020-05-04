import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { BACKEND_URL } from '../../config/config';
import axios from 'axios';
import { Button, Spin, Radio, Typography } from 'antd';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;

export const SurveyPage: React.FC = props => {
  const { selectedDisease, age, sex, onSubmit } = props;
  const [questions, setQuestions] = useState({});
  const [loading, setLoading] = useState<boolean>(true);
  const [answers, setAnswers] = useState({});
  const history = useHistory();

  const nextStep = () => {
    history.push('/nurse/2');
    axios.post(`${BACKEND_URL}/details/any_string`, answers).then(value => {
      onSubmit(
        value.data.map(v => ({
          amount: 20,
          frequency: v.frequency,
          name: v.activity,
          times: ['09:00', '18:00']
        }))
      );
    });
  };

  useEffect(() => {
    axios
      .post(`${BACKEND_URL}/baseInformation`, {
        disease: selectedDisease,
        age: `${age}`,
        gender: sex === 1 ? 'M' : 'F'
      })
      .then(value => {
        setLoading(false);
        setQuestions(value.data);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Spin size={'large'} />
      ) : (
        <Box>
          {Object.keys(questions).map((key, index) => {
            return (
              <Box key={index}>
                <Title level={4}>{key}</Title>
                <Radio.Group
                  value={answers[key]}
                  onChange={e => {
                    setAnswers({
                      ...answers,
                      [key]: e.target.value
                    });
                  }}
                >
                  {questions[key].map((v, i) => (
                    <Box key={i}>
                      <Radio key={`${v}${i}`} value={v}>
                        {v}
                      </Radio>
                    </Box>
                  ))}
                </Radio.Group>
              </Box>
            );
          })}
          <Button type={'primary'} size={'large'} onClick={nextStep}>
            Далее
          </Button>
        </Box>
      )}
    </>
  );
};
