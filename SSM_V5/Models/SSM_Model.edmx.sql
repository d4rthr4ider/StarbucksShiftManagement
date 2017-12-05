
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 11/23/2017 10:53:13
-- Generated from EDMX file: C:\Users\westb\Desktop\SSM_V5\SSM_V5\Models\SSM_Model.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [SSM_Data3];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[AspNetUsers]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AspNetUsers];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'AspNetUsers'
CREATE TABLE [dbo].[AspNetUsers] (
    [Id] nvarchar(128)  NOT NULL,
    [Email] nvarchar(256)  NULL,
    [EmailConfirmed] bit  NOT NULL,
    [PasswordHash] nvarchar(max)  NULL,
    [SecurityStamp] nvarchar(max)  NULL,
    [PhoneNumber] nvarchar(max)  NULL,
    [PhoneNumberConfirmed] bit  NOT NULL,
    [TwoFactorEnabled] bit  NOT NULL,
    [LockoutEndDateUtc] datetime  NULL,
    [LockoutEnabled] bit  NOT NULL,
    [AccessFailedCount] int  NOT NULL,
    [UserName] nvarchar(256)  NOT NULL,
    [FirstName] nvarchar(max)  NOT NULL,
    [LastName] nvarchar(max)  NOT NULL,
    [StoreNum] nvarchar(50)  NOT NULL,
    [Admin] bit  NOT NULL,
    [Manager] bit  NOT NULL,
    [StarCount] int  NULL
);
GO

-- Creating table 'Shifts'
CREATE TABLE [dbo].[Shift] (
    [ShiftID] int IDENTITY(1,1) NOT NULL,
    [Date] datetime  NOT NULL,
    [StartTime] datetime  NOT NULL,
    [EndTime] datetime  NOT NULL,
    [StoreNum] nvarchar(50)  NOT NULL,
    [Id] nvarchar(128)  NOT NULL,
    [IsCovered] bit  NOT NULL,
    [Status] nvarchar(max)  NULL
);
GO

-- Creating table 'Stores'
CREATE TABLE [dbo].[Store] (
    [StoreNum] nvarchar(50)  NOT NULL,
    [StoreName] nvarchar(50)  NOT NULL,
    [StreetAddr] nvarchar(50)  NOT NULL,
    [City] nvarchar(50)  NOT NULL,
    [State] nvarchar(50)  NOT NULL,
    [District] nvarchar(50)  NOT NULL,
    [Area] nvarchar(50)  NOT NULL
);
GO

-- Creating table 'CoveredShifts'
CREATE TABLE [dbo].[CoveredShift] (
    [CoveredId] int IDENTITY(1,1) NOT NULL,
    [ShiftID] int  NOT NULL,
    [Id] nvarchar(128)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'AspNetUsers'
ALTER TABLE [dbo].[AspNetUsers]
ADD CONSTRAINT [PK_AspNetUsers]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [ShiftID] in table 'Shifts'
ALTER TABLE [dbo].[Shift]
ADD CONSTRAINT [PK_Shifts]
    PRIMARY KEY CLUSTERED ([ShiftID] ASC);
GO

-- Creating primary key on [StoreNum] in table 'Stores'
ALTER TABLE [dbo].[Store]
ADD CONSTRAINT [PK_Stores]
    PRIMARY KEY CLUSTERED ([StoreNum] ASC);
GO

-- Creating primary key on [CoveredId] in table 'CoveredShifts'
ALTER TABLE [dbo].[CoveredShift]
ADD CONSTRAINT [PK_CoveredShift]
    PRIMARY KEY CLUSTERED ([CoveredId] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [StoreNum] in table 'AspNetUsers'
ALTER TABLE [dbo].[AspNetUsers]
ADD CONSTRAINT [FK_AspNetUsers_Store]
    FOREIGN KEY ([StoreNum])
    REFERENCES [dbo].[Store]
        ([StoreNum])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_AspNetUsers_Store'
CREATE INDEX [IX_FK_AspNetUsers_Store]
ON [dbo].[AspNetUsers]
    ([StoreNum]);
GO

-- Creating foreign key on [Id] in table 'Shifts'
ALTER TABLE [dbo].[Shift]
ADD CONSTRAINT [FK_Shift_AspNetUsers]
    FOREIGN KEY ([Id])
    REFERENCES [dbo].[AspNetUsers]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Shift_AspNetUsers'
CREATE INDEX [IX_FK_Shift_AspNetUsers]
ON [dbo].[Shift]
    ([Id]);
GO

-- Creating foreign key on [StoreNum] in table 'Shifts'
ALTER TABLE [dbo].[Shift]
ADD CONSTRAINT [FK_Shift_Store]
    FOREIGN KEY ([StoreNum])
    REFERENCES [dbo].[Store]
        ([StoreNum])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Shift_Store'
CREATE INDEX [IX_FK_Shift_Store]
ON [dbo].[Shift]
    ([StoreNum]);
GO

-- Creating foreign key on [Id] in table 'CoveredShifts'
ALTER TABLE [dbo].[CoveredShift]
ADD CONSTRAINT [FK_User_Covered]
    FOREIGN KEY ([Id])
    REFERENCES [dbo].[AspNetUsers]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_User_Covered'
CREATE INDEX [IX_FK_User_Covered]
ON [dbo].[CoveredShift]
    ([Id]);
GO

-- Creating foreign key on [ShiftID] in table 'CoveredShifts'
ALTER TABLE [dbo].[CoveredShift]
ADD CONSTRAINT [FK_Shift_Covered]
    FOREIGN KEY ([ShiftID])
    REFERENCES [dbo].[Shift]
        ([ShiftID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Shift_Covered'
CREATE INDEX [IX_FK_Shift_Covered]
ON [dbo].[CoveredShift]
    ([ShiftID]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------