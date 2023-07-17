import { AssigneeType } from './enums/assignee-type.enum';
import { StepType } from './enums/step-type.enum';

export interface Step {
  name: string;
  description: string;
  assignee_type: AssigneeType;
  step_type: StepType;
  order: number;
  workflow_id: number;
}
