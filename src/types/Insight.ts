export enum PromptCategory {
  Tips = 1,
  HowTo = 2,
  Resources = 3,
  SelfCare = 4,
}

export interface Insight {
  id: string;
  ranking: number;
  summary_id: string;
  text: string;
}

function insightFromJson(json: any): Insight {
  return {
    id: json.ranking_id,
    ranking: json.rank_score,
    summary_id: json.summary_id,
    text: json.response,
  };
}

function insightsFromJson(json: any): Insight[] {
  return json.map((j: any) => insightFromJson(j));
}

export interface Prompt {
  template_id: string;
  category: number;
  text: string;
  //   community
  insights?: Insight[];
}

export function promptFromJson(json: any): Prompt {
  return {
    template_id: json.prompt_template_id,
    category: json.category,
    text: json.prompt_text,
    insights: insightsFromJson(json.summaries),
  };
}

export function promptsFromJson(json: any): Prompt[] {
  return json.map((j: any) => promptFromJson(j));
}
