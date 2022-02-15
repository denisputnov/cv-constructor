import React from 'react';
import styled from 'styled-components';
import { TemplateProps } from '../common/ types';
import Avatar from '../common/components/Avatar';
import { Phone } from '../common/icons';

const Classic: React.FC<TemplateProps> = ({ data }) => {

  return (
    <Layout>
      <div>
        <Avatar image={data.image ?? ""} aspectRatio="3/4" />
        <Contacts>
          {data.contacts.map(({ name, value }) => {
            return <ContactsItem>{name}{value}</ContactsItem>
          })}
        </Contacts>
      </div>
      <div>
        <Name>{data.global.name} {data.global.surname}</Name>
        <Position>{data.global.position}</Position>
        <Phone />
      </div>
    </Layout>
  )
}

const Contacts = styled.div`
  
`

const ContactsItem = styled.p`
  margin-bottom: 0;
`

const Name = styled.p`
  font-size: 1.8em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0;
`

const Position = styled.p`
  font-size: 0.7em;
  font-weight: 600;
  text-transform: uppercase;
`

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 2fr;
  gap: 3%;
  height: 100%;
`

export default Classic;
