/* eslint-disable react/no-multi-comp */
import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  useColorModeValue,
  Divider,
  Text,
} from '@chakra-ui/react'
import styles from './styles.module.css'
import { Skill, Skills, splitSkills } from 'config/skills'

type ISkillSetModal = {
  isOpen: boolean
  onClose(): void
}

const SkillList = ({
  title,
  columns,
}: {
  title: string
  columns: Skill[][]
}) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const [colOne, colTwo = []] = columns
  return (
    <>
      <Heading as="div" size="sm" paddingBottom={1} variant="description">
        {title}
      </Heading>
      <Divider marginBottom={4} />
      <SimpleGrid columns={2} spacing={4} paddingBottom={6}>
        <List spacing={3}>
          {colOne.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
        <List spacing={3}>
          {colTwo.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>
    </>
  )
}
const SkillSetModal = ({ isOpen, onClose }: ISkillSetModal) => {
  const frontendCols = splitSkills(Skills.frontend)
  const backendCols = splitSkills(Skills.backend)
  const aiAutomationCols = splitSkills(Skills.ai_automation)
  const dataBaseCols = splitSkills(Skills.database)
  const cloudDeploymentCols = splitSkills(Skills.cloud_deployment)
  const uiFrameWorkCols = splitSkills(Skills.ui_frameworks)
  const toolsWorkflowCols = splitSkills(Skills.tools_workflow)
  const otherExpertiseCols = splitSkills(Skills.other_expertise)
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent bg={{ base: "gray.800" }}>
        <ModalHeader>Full Skill Set List</ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.skillModal}>
          <SkillList title="Frontend Development" columns={frontendCols} />
          <SkillList title="Backend Development" columns={backendCols} />
          <SkillList title="AI & Automation" columns={aiAutomationCols} />
          <SkillList title="Database & Storage" columns={dataBaseCols} />
          <SkillList title="Cloud & Deployment" columns={cloudDeploymentCols} />
          <SkillList title="UI Frameworks" columns={uiFrameWorkCols} />
          <SkillList title="Tools & Workflow" columns={toolsWorkflowCols} />
          <SkillList title="Other Expertise" columns={otherExpertiseCols} />
        </ModalBody>
        <ModalFooter>
          <Text fontSize="x-small">*Some micro frameworks not included </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SkillSetModal
