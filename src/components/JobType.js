import React from 'react-native';
import styled from 'styled-components/native';

export function JobType() {
  const jobs = [
    '카페 베이커리',
    '편의점',
    '레스토랑',
    '학원·과외',
    '배달',
    '물류·포장',
    '공연·전시스탭',
    '기타',
  ];

  const jobList = jobs.map(job => <JobContainer>{job}</JobContainer>);

  return {jobList};
}

const JobContainer = styled.View`
  width: 280px;
  height: 48px;
  order: 7;
  flex-grow: 0;
`;
