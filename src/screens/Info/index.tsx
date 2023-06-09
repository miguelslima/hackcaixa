import React, { useEffect } from "react";
import { Platform, UIManager } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-virtualized-view";
import { AccordionList } from "react-native-accordion-list-view";
import { useTheme } from "styled-components/native";

import { Button } from "../../components/Button";

import iconeLogo from "../../assets/icone-logo.png";
import data from "../../../typeLoan";

import {
  AccordionBody,
  AccordionContainer,
  AccordionTitle,
  Container,
  Header,
  ImageLogo,
  InfoContainer,
  InfoTitle,
  TitleHeader,
} from "./styles";
import { useAuth } from "../../hooks/auth";

export function Info() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const { user } = useAuth();

  useEffect(() => {
    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  function handleSimulator() {
    navigation.navigate("Simulador");
  }

  return (
    <Container>
      <ScrollView>
        <Header>
          <ImageLogo source={iconeLogo} />
          <TitleHeader>Crédito CAIXA</TitleHeader>
        </Header>
        <InfoContainer>
          <InfoTitle>
            Olá {user?.name}, seja qual for o momento ou motivo, a CAIXA tem a
            opção de crédito ideal para tirar seus planos do papel. Conheça
            nossas opções de empréstimo e financiamento.
          </InfoTitle>
        </InfoContainer>
        <AccordionContainer>
          <AccordionList
            data={data}
            customTitle={(item) => (
              <AccordionTitle>{item.title}</AccordionTitle>
            )}
            customBody={(item) => <AccordionBody>{item.body}</AccordionBody>}
            animationDuration={400}
            expandMultiple={false}
            containerItemStyle={{ marginVertical: 10, padding: 15 }}
          />
          <Button
            title="Simule agora"
            color={COLORS.CAIXA_YELLOW}
            onPress={handleSimulator}
          />
        </AccordionContainer>
      </ScrollView>
    </Container>
  );
}
