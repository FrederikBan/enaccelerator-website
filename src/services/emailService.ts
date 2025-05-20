
/**
 * Email Service
 * 
 * This service provides functions to work with various email provider APIs
 * such as Mailchimp, SendGrid, ConvertKit, etc.
 */

export type EmailProviderType = 'mailchimp' | 'sendgrid' | 'convertkit' | 'custom';

export interface EmailSubscriberData {
  email: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
  metadata?: Record<string, any>;
}

export interface EmailServiceConfig {
  providerType: EmailProviderType;
  apiKey: string;
  listId?: string;
  apiEndpoint?: string;
}

export class EmailService {
  private config: EmailServiceConfig;

  constructor(config: EmailServiceConfig) {
    this.config = config;
  }

  /**
   * Subscribe a new email to the mailing list
   */
  async subscribeEmail(subscriberData: EmailSubscriberData): Promise<{ success: boolean; message: string }> {
    console.log(`Subscribing email with ${this.config.providerType} provider`);
    
    try {
      switch (this.config.providerType) {
        case 'mailchimp':
          return await this.subscribeWithMailchimp(subscriberData);
        case 'sendgrid':
          return await this.subscribeWithSendgrid(subscriberData);
        case 'convertkit':
          return await this.subscribeWithConvertKit(subscriberData);
        case 'custom':
          return await this.subscribeWithCustomAPI(subscriberData);
        default:
          throw new Error('Unsupported email provider');
      }
    } catch (error) {
      console.error("Email subscription error:", error);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : 'Unknown error occurred' 
      };
    }
  }

  /**
   * Subscribe with Mailchimp API
   */
  private async subscribeWithMailchimp(subscriberData: EmailSubscriberData): Promise<{ success: boolean; message: string }> {
    if (!this.config.listId) {
      throw new Error('Mailchimp list ID is required');
    }

    // This should be implemented in a backend service for security
    // This is a placeholder for the API structure
    try {
      // In production, you would make an API call to your backend server
      // that securely stores your Mailchimp API key
      const endpoint = `https://us-server.api.mailchimp.com/3.0/lists/${this.config.listId}/members`;
      
      console.log(`Would send to Mailchimp: ${subscriberData.email}`);
      
      return {
        success: true,
        message: 'Subscription successful'
      };
    } catch (error) {
      throw new Error('Failed to subscribe with Mailchimp');
    }
  }

  /**
   * Subscribe with SendGrid API
   */
  private async subscribeWithSendgrid(subscriberData: EmailSubscriberData): Promise<{ success: boolean; message: string }> {
    try {
      // In production, implement this with a backend service
      console.log(`Would send to SendGrid: ${subscriberData.email}`);
      
      return {
        success: true,
        message: 'Subscription successful'
      };
    } catch (error) {
      throw new Error('Failed to subscribe with SendGrid');
    }
  }

  /**
   * Subscribe with ConvertKit API
   */
  private async subscribeWithConvertKit(subscriberData: EmailSubscriberData): Promise<{ success: boolean; message: string }> {
    if (!this.config.apiEndpoint) {
      throw new Error('ConvertKit form endpoint is required');
    }

    try {
      // In production, implement this with a backend service
      console.log(`Would send to ConvertKit: ${subscriberData.email}`);
      
      return {
        success: true,
        message: 'Subscription successful'
      };
    } catch (error) {
      throw new Error('Failed to subscribe with ConvertKit');
    }
  }

  /**
   * Subscribe with a custom API endpoint
   */
  private async subscribeWithCustomAPI(subscriberData: EmailSubscriberData): Promise<{ success: boolean; message: string }> {
    if (!this.config.apiEndpoint) {
      throw new Error('Custom API endpoint is required');
    }

    try {
      // Make a direct call to the provided API endpoint
      const response = await fetch(this.config.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriberData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Subscription failed');
      }

      const data = await response.json();
      return {
        success: true,
        message: data.message || 'Subscription successful'
      };
    } catch (error) {
      throw new Error('Failed to subscribe with custom API');
    }
  }
}

/**
 * Helper function to create a configured EmailService instance
 */
export const createEmailService = (config: EmailServiceConfig): EmailService => {
  return new EmailService(config);
};
