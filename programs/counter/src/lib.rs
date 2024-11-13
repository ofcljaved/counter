use anchor_lang::prelude::*;

declare_id!("6dLCr2fhhBNRf5TUp64WXGaJ3jb1A8SD2tNnTk9TB6gC");

#[program]
pub mod counter {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
