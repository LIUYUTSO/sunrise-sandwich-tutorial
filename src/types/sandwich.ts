export type SandwichType = 'burger' | 'panini' | 'grilled' | 'riceRoll' | 'wrap';

export interface Layer {
  ingredients: string[];
  sauce?: string;
  seasoning?: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  tips?: string[];
}

export interface Sandwich {
  id: string | number;
  name: string;
  type: SandwichType;
  layers: {
    bottom: Layer;
    middle?: Layer;
    top: Layer;
  };
  notes: string[];
  steps: Step[];
}

export interface Tutorial {
  currentStep: number;
  totalSteps: number;
  sandwich: Sandwich;
} 