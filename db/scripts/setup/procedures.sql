
/*
SET1 - CREATE PROCEDURE CHECK LAST PASSWORD CHANGE
*/

-- SET1

PRINT 'Executing dbo.v1_Check_Last_Password_Change.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Check_Last_Password_Change' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Check_Last_Password_Change]
END
GO

CREATE PROCEDURE [dbo].[v1_Check_Last_Password_Change]
	@duration INT
AS

SET NOCOUNT ON

BEGIN TRY
	SELECT
		[usage].[userId] AS [userId],
		MAX([usage].[serverDate]) AS [serverDate]
	FROM 
		[dbo].[tblUsage] AS [usage]
	INNER JOIN
		[dbo].[tblScopes] AS [scope]
	ON
		[usage].[scopeId] = [scope].[id]
	INNER JOIN
		[dbo].[tblUsers] AS [user]
	ON
		[usage].[userId] = [user].[id]
	WHERE
		[user].[validated] = 1
		AND
		DATEADD(DAY, @duration, [usage].[serverDate]) < GETDATE()
		AND
		[scope].[url] IN ('/auth/register', '/auth/reset-password', '/auth/change-password')
	GROUP BY 
		[usage].[userId]

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'No records found!' AS [message], 69 AS [code]
		RETURN 0
	END
	
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET1
/*
SET1 - CREATE PROCEDURE ADD
SET2 - CREATE PROCEDURE ADD USER
SET3 - CREATE PROCEDURE ADD SCOPE
SET4 - CREATE PROCEDURE ADD DOMAIN
SET5 - CREATE PROCEDURE GET
SET6 - CREATE PROCEDURE LIST
SET7 - CREATE PROCEDURE LOAD
SET8 - CREATE PROCEDURE VALIDATE
SET9 - CREATE PROCEDURE SHARE
SET10 - CREATE PROCEDURE DELETE
SET11 - CREATE PROCEDURE UNSUBSCRIBE
SET12 - CREATE PROCEDURE UPDATE SUBSCRIBER
SET13 - CREATE PROCEDURE UPDATE
SET14 - CREATE PROCEDURE PURGE SCOPES
SET15 - CREATE PROCEDURE PURGE DOMAINS
SET16 - CREATE PROCEDURE REQUEST ACCESS
*/

-- SET1

PRINT 'Executing dbo.v1_Apps_Add.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Add' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Add]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Add]
	@url VARCHAR(255),
	@icon VARCHAR(255),
	@name VARCHAR(255),
	@secret VARCHAR(255),
	@expiry BIGINT,
	@userId INT,
	@private INT = 0,
	@themeColor VARCHAR(255),
	@googleDatabase VARCHAR(255) = NULL,
	@themeBackground VARCHAR(255),
	@organizationOnly INT,
	@googleCredentials VARCHAR(5000) = NULL
AS

SET NOCOUNT ON

BEGIN TRY
	IF EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblApps] WHERE [name] = @name)
	BEGIN
		SELECT 'App with same name already exists!' AS [message], 70 AS [code]
		RETURN 0
	END

	INSERT INTO [dbo].[tblApps]
		(
			[url],
			[icon],
			[name],
			[userId],
			[expiry],
			[secret],
			[private],
			[themeColor],
			[googleDatabase],
			[themeBackground],
			[organizationOnly],
			[googleCredentials]
		)
	VALUES
		(
			@url,
			@icon,
			@name,
			@userId,
			@expiry,
			@secret,
			@private,
			@themeColor,
			@googleDatabase,
			@themeBackground,
			@organizationOnly,
			@googleCredentials
		)

	SELECT SCOPE_IDENTITY() AS [_id]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET1

-- SET2

PRINT 'Executing dbo.v1_Apps_Add_User.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Add_User' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Add_User]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Add_User]
	@role INT,
	@appId INT,
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY
	IF EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblAppsUsers] WHERE [appId] = @appId AND [userId] = @userId)
	BEGIN
		SELECT 'User already shared to app!' AS [message], 70 AS [code]
		RETURN 0
	END

	INSERT INTO [dbo].[tblAppsUsers]
		(
			[role],
			[appId],
			[userId]
		)
	VALUES
		(
			@role,
			@appId,
			@userId
		)

	SELECT SCOPE_IDENTITY() AS [_id]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET2

-- SET3

PRINT 'Executing dbo.v1_Apps_Add_Scope.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Add_Scope' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Add_Scope]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Add_Scope]
	@appId INT,
	@userId INT,
	@scopeId INT
AS

SET NOCOUNT ON

BEGIN TRY
	IF EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblAppsScopes] WHERE [appId] = @appId AND [scopeId] = @scopeId)
	BEGIN
		SELECT 'Scope already linked to app!' AS [message], 70 AS [code]
		RETURN 0
	END

	INSERT INTO [dbo].[tblAppsScopes]
		(
			[appId],
			[userId],
			[scopeId]
		)
	VALUES
		(
			@appId,
			@userId,
			@scopeId
		)

	SELECT SCOPE_IDENTITY() AS [_id]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET3

-- SET4

PRINT 'Executing dbo.v1_Apps_Add_Domain.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Add_Domain' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Add_Domain]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Add_Domain]
	@url VARCHAR(255),
	@appId INT,
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY
	IF EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblAppsDomains] WHERE [appId] = @appId AND [url] = @url)
	BEGIN
		SELECT 'Domain already linked to app!' AS [message], 70 AS [code]
		RETURN 0
	END

	INSERT INTO [dbo].[tblAppsDomains]
		(
			[url],
			[appId],
			[userId]
		)
	VALUES
		(
			@url,
			@appId,
			@userId
		)

	SELECT SCOPE_IDENTITY() AS [_id]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET4

-- SET5

PRINT 'Executing dbo.v1_Apps_Get.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Get' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Get]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Get]
	@appId INT,
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY
	IF NOT EXISTS (SELECT TOP 1 [app].[id] FROM [dbo].[tblApps] AS [app] INNER JOIN [dbo].[tblAppsUsers] AS [user] ON [app].[id] = [user].[appId] WHERE [app].[id] = @appId AND [user].[role] > 0 AND [user].[userId] = @userId)
	BEGIN
		SELECT 'App not found!' AS [message], 69 AS [code]
		RETURN 0
	END

	SELECT
		[app].[url],
		[app].[icon],
		[app].[name],
		[user].[role],
		[app].[expiry],
		[app].[secret],
		[user].[status],
		[app].[private],
		[user].[userId],
		[scope].[scopeId],
		[account].[email],
		[app].[themeColor],
		[app].[id] AS [_id],
		[app].[googleDatabase],
		[app].[themeBackground],
		[app].[organizationOnly],
		[app].[googleCredentials],
		[domain].[url] AS [domain]
	FROM
		[dbo].[tblApps] AS [app]
	INNER JOIN
		[dbo].[tblAppsUsers] AS [user]
	ON
		[app].[id] = [user].[appId]
	INNER JOIN
		[dbo].[tblAppsScopes] AS [scope]
	ON
		[user].[appId] = [scope].[appId]
	INNER JOIN
		[dbo].[tblAppsDomains] AS [domain]
	ON
		[scope].[appId] = [domain].[appId]
	INNER JOIN
		[dbo].[tblUsers] AS [account]
	ON
		[account].[id] = [user].[userId]
	WHERE
		[app].[id] IN (SELECT TOP 1 [app].[id] FROM [dbo].[tblApps] AS [app] INNER JOIN [dbo].[tblAppsUsers] AS [user] ON [app].[id] = [user].[appId] WHERE [app].[id] = @appId AND [user].[userId] = @userId)
	
	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'No records found!' AS [message], 69 AS [code]
		RETURN 0
	END

	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET5

-- SET6

PRINT 'Executing dbo.v1_Apps_List.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_List' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_List]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_List]
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY
	IF NOT EXISTS (SELECT TOP 1 [app].[id] FROM [dbo].[tblApps] AS [app] INNER JOIN [dbo].[tblAppsUsers] AS [user] ON [app].[id] = [user].[appId] WHERE [user].[role] > 0 AND [user].[userId] = @userId)
	BEGIN
		SELECT 'App not found!' AS [message], 69 AS [code]
		RETURN 0
	END

	SELECT
		[app].[url],
		[app].[icon],
		[app].[name],
		[user].[role],
		[app].[expiry],
		[app].[secret],
		[user].[status],
		[app].[private],
		[user].[userId],
		[scope].[scopeId],
		[account].[email],
		[app].[themeColor],
		[app].[id] AS [_id],
		[app].[googleDatabase],
		[app].[themeBackground],
		[app].[organizationOnly],
		[app].[googleCredentials],
		[domain].[url] AS [domain]
	FROM
		[dbo].[tblApps] AS [app]
	INNER JOIN
		[dbo].[tblAppsUsers] AS [user]
	ON
		[app].[id] = [user].[appId]
	INNER JOIN
		[dbo].[tblAppsScopes] AS [scope]
	ON
		[user].[appId] = [scope].[appId]
	INNER JOIN
		[dbo].[tblAppsDomains] AS [domain]
	ON
		[scope].[appId] = [domain].[appId]
	INNER JOIN
		[dbo].[tblUsers] AS [account]
	ON
		[account].[id] = [user].[userId]
	WHERE
		[app].[id] IN (SELECT [app].[id] FROM [dbo].[tblApps] AS [app] INNER JOIN [dbo].[tblAppsUsers] AS [user] ON [app].[id] = [user].[appId] WHERE [user].[userId] = @userId)
	
	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'No records found!' AS [message], 69 AS [code]
		RETURN 0
	END

	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET6

-- SET7

PRINT 'Executing dbo.v1_Apps_Load.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Load' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Load]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Load]
	@appId INT
AS

SET NOCOUNT ON

BEGIN TRY
	IF NOT EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblApps] WHERE [id] = @appId)
	BEGIN
		SELECT 'App not found!' AS [message], 69 AS [code]
		RETURN 0
	END

	SELECT
		[app].[url],
		[app].[icon],
		[app].[name],
		[user].[role],
		[app].[expiry],
		[app].[secret],
		[app].[private],
		[user].[userId],
		[scope].[scopeId],
		[app].[themeColor],
		[app].[id] AS [_id],
		[app].[googleDatabase],
		[app].[themeBackground],
		[app].[organizationOnly],
		[app].[googleCredentials],
		[domain].[url] AS [domain]
	FROM
		[dbo].[tblApps] AS [app]
	FULL OUTER JOIN
		[dbo].[tblAppsUsers] AS [user]
	ON
		[app].[id] = [user].[appId]
	FULL OUTER JOIN
		[dbo].[tblAppsScopes] AS [scope]
	ON
		[user].[appId] = [scope].[appId]
	FULL OUTER JOIN
		[dbo].[tblAppsDomains] AS [domain]
	ON
		[scope].[appId] = [domain].[appId]
	WHERE
		[app].[id] IN (SELECT TOP 1 [id] FROM [dbo].[tblApps] WHERE [id] = @appId)
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET7

-- SET8

PRINT 'Executing dbo.v1_Apps_Validate.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Validate' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Validate]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Validate]
	@appId INT
AS

SET NOCOUNT ON

BEGIN TRY
	IF NOT EXISTS(SELECT TOP 1 [id] FROM [dbo].[tblApps] WHERE [id] = @appId)
	BEGIN
		SELECT 'Application not found!' AS [message], 69 AS [code]
		RETURN 0
	END

	SELECT
		[user].[role],
		[app].[expiry],
		[app].[private],
		[user].[userId],
		[scope].[scopeId],
		[app].[id] AS [_id],
		[app].[url] AS [appUrl],
		[app].[icon] AS [appIcon],
		[app].[name] AS [appName],
		[domain].[url] AS [domain]
	FROM
		[dbo].[tblApps] AS [app]
	INNER JOIN
		[dbo].[tblAppsUsers] AS [user]
	ON
		[app].[id] = [user].[appId]
	INNER JOIN
		[dbo].[tblAppsScopes] AS [scope]
	ON
		[user].[appId] = [scope].[appId]
	INNER JOIN
		[dbo].[tblAppsDomains] AS [domain]
	ON
		[scope].[appId] = [domain].[appId]
	WHERE
		[app].[id] = @appId

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'No records found!' AS [message], 69 AS [code]
		RETURN 0
	END

	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET8

-- SET9

PRINT 'Executing dbo.v1_Apps_Share.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Share' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Share]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Share]
	@role INT,
	@appId INT,
	@email VARCHAR(255),
	@adminId INT
AS

SET NOCOUNT ON

BEGIN TRY
	DECLARE @userId INT = 0
	DECLARE @adminrole INT = 0

	SELECT TOP 1
		@userId = [id]
	FROM
		[dbo].[tblUsers]
	WHERE
		[email] = @email

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'This user does not have an account on the system!' AS [message], 401 AS [code]
		RETURN 0
	END

	SELECT TOP 1
		@adminrole = [role]
	FROM
		[dbo].[tblAppsUsers]
	WHERE
		[appId] = @appId
		AND
		[userId] = @adminId

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'You are not a user on this app!' AS [message], 401 AS [code]
		RETURN 0
	END

	IF (@adminrole < 4)
	BEGIN
		SELECT 'You are not an admin on this app!' AS [message], 401 AS [code]
		RETURN 0
	END

	IF EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblAppsUsers] WHERE [appId] = @appId AND [userId] = @userId)
	BEGIN
		SELECT 'User already shared to app!' AS [message], 70 AS [code]
		RETURN 0
	END

	INSERT INTO [dbo].[tblAppsUsers]
		(
			[role],
			[appId],
			[userId]
		)
	VALUES
		(
			@role,
			@appId,
			@userId
		)

	SELECT @@ROWCOUNT AS [n], @userId AS [userId]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET9

-- SET10

PRINT 'Executing dbo.v1_Apps_Delete.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Delete' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Delete]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Delete]
	@appId INT,
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY
	BEGIN TRAN
		DECLARE @id INT
		DECLARE @role INT = 0
		DECLARE @deleted INT = 0

		SELECT TOP 1
			@id = [appId],
			@role = [role]
		FROM
			[dbo].[tblAppsUsers]
		WHERE
			[appId] = @appId
			AND
			[userId] = @userId

		IF (@@ROWCOUNT = 0)
		BEGIN
			SELECT 'You are not a user on this application' AS [message], 503 AS [code]
			RETURN 0
		END

		IF (@role < 5)
		BEGIN
			SELECT 'Only owners can remove applications' AS [message], 503 AS [code]
			RETURN 0
		END

		DELETE FROM
			[dbo].[tblApps]
		WHERE
			[id] = @id

		SET @deleted = @deleted + @@ROWCOUNT

		DELETE FROM
			[dbo].[tblAppsUsers]
		WHERE
			[appId] = @id

		SET @deleted = @deleted + @@ROWCOUNT

		DELETE FROM
			[dbo].[tblAppsScopes]
		WHERE
			[appId] = @id

		SET @deleted = @deleted + @@ROWCOUNT

		DELETE FROM
			[dbo].[tblAppsDomains]
		WHERE
			[appId] = @id

		SET @deleted = @deleted + @@ROWCOUNT

		DELETE FROM
			[dbo].[tblScopes]
		WHERE
			[appId] = @id

		SET @deleted = @deleted + @@ROWCOUNT

		DELETE FROM
			[dbo].[tblTokens]
		WHERE
			[appId] = @id

		SET @deleted = @deleted + @@ROWCOUNT

		DELETE FROM
			[dbo].[tblFeatures]
		WHERE
			[appId] = @id

		SET @deleted = @deleted + @@ROWCOUNT
	COMMIT TRAN

	SELECT @deleted AS [n]
	RETURN 1
END TRY

BEGIN CATCH
	ROLLBACK TRAN
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET10

-- SET11

PRINT 'Executing dbo.v1_Apps_Unsubscribe.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Unsubscribe' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Unsubscribe]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Unsubscribe]
	@appId INT,
	@userId INT,
	@adminId INT
AS

SET NOCOUNT ON

BEGIN TRY
	DECLARE @id INT
	DECLARE @role INT = 0
	DECLARE @deleted INT = 0

	SELECT TOP 1
		@id = [appId],
		@role = [role]
	FROM
		[dbo].[tblAppsUsers]
	WHERE
		[appId] = @appId
		AND
		[userId] = @adminId

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'You are not a user on this application!' AS [message], 503 AS [code]
		RETURN 0
	END

	IF (@userId = @adminId AND @role = 5)
	BEGIN
		SELECT 'An owner can not unsubscribe from their applications' AS [message], 503 AS [code]
		RETURN 0
	END

	IF (@userId != @adminId AND @role < 4)
	BEGIN
		SELECT 'Only administrators can unsubscribe other users from applications' AS [message], 503 AS [code]
		RETURN 0
	END

	DELETE FROM
		[dbo].[tblAppsUsers]
	WHERE
		[appId] = @appId
		AND
		[userId] = @userId

	SELECT @@ROWCOUNT AS [n]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET11

-- SET12

PRINT 'Executing dbo.v1_Apps_Update_Subscriber.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Update_Subscriber' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Update_Subscriber]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Update_Subscriber]
	@role INT,
	@appId INT,
	@userId INT,
	@status VARCHAR(255),
	@adminId INT
AS

SET NOCOUNT ON

BEGIN TRY
	DECLARE @updated INT = 0

	IF NOT EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblAppsUsers] WHERE [role] >= 4 AND [appId] = @appId AND [userId] = @adminId)
	BEGIN
		SELECT 'You are not an admin user on this application!' AS [message], 503 AS [code]
		RETURN 0
	END
	
	IF NOT EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblAppsUsers] WHERE [appId] = @appId AND [userId] = @userId)
	BEGIN
		SELECT 'User is not shared to this application!' AS [message], 503 AS [code]
		RETURN 0
	END

	IF (@role > 4)
	BEGIN
		SELECT 'You cannot make this user the owner without changing ownership of this application!' AS [message], 503 AS [code]
		RETURN 0
	END

	UPDATE [dbo].[tblAppsUsers] SET [role] = @role WHERE [appId] = @appId AND [userId] = @userId AND @role IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblAppsUsers] SET [status] = @status WHERE [appId] = @appId AND [userId] = @userId AND @status IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	SELECT @updated AS [n]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET12

-- SET13

PRINT 'Executing dbo.v1_Apps_Update.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Update' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Update]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Update]
	@url VARCHAR(255),
	@icon VARCHAR(255),
	@name VARCHAR(255),
	@appId INT,
	@secret VARCHAR(255),
	@userId INT,
	@expiry BIGINT,
	@private INT,
	@themeColor VARCHAR(255),
	@googleDatabase VARCHAR(255),
	@themeBackground VARCHAR(255),
	@googleCredentials VARCHAR(5000)
AS

SET NOCOUNT ON

BEGIN TRY
	DECLARE @role INT = 0
	DECLARE @updated INT = 0

	SELECT TOP 1
		@role = [role]
	FROM
		[dbo].[tblAppsUsers]
	WHERE
		[appId] = @appId
		AND
		[userId] = @userId

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'App does not exist!' AS [message], 69 AS [code]
		RETURN 0
	END

	IF (@role < 2)
	BEGIN
		SELECT 'You cannot update application!' AS [message], 503 AS [code]
		RETURN 0
	END

	UPDATE [dbo].[tblApps] SET [url] = @url WHERE [id] = @appId AND @url IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblApps] SET [icon] = @icon WHERE [id] = @appId AND @icon IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblApps] SET [name] = @name WHERE [id] = @appId AND @name IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblApps] SET [expiry] = @expiry WHERE [id] = @appId AND @expiry IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblApps] SET [secret] = @secret WHERE [id] = @appId AND @secret IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblApps] SET [private] = @private WHERE [id] = @appId AND @private IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblApps] SET [themeColor] = @themeColor WHERE [id] = @appId AND @themeColor IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblApps] SET [googleDatabase] = @googleDatabase WHERE [id] = @appId AND @googleDatabase IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblApps] SET [themeBackground] = @themeBackground WHERE [id] = @appId AND @themeBackground IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblApps] SET [googleCredentials] = @googleCredentials WHERE [id] = @appId AND @googleCredentials IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT
	
	SELECT @updated AS [n]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET13

-- SET14

PRINT 'Executing dbo.v1_Apps_Purge_Scopes.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Purge_Scopes' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Purge_Scopes]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Purge_Scopes]
	@appId INT
AS

SET NOCOUNT ON

BEGIN TRY
	DELETE FROM
		[dbo].[tblAppsScopes]
	WHERE
		[appId] = @appId

	SELECT @@ROWCOUNT AS [n]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET14

-- SET15

PRINT 'Executing dbo.v1_Apps_Purge_Domains.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Purge_Domains' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Purge_Domains]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Purge_Domains]
	@appId INT
AS

SET NOCOUNT ON

BEGIN TRY
	DELETE FROM
		[dbo].[tblAppsDomains]
	WHERE
		[appId] = @appId

	SELECT @@ROWCOUNT AS [n]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET15

-- SET16

PRINT 'Executing dbo.v1_Apps_Request_Access.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Apps_Request_Access' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Apps_Request_Access]
END
GO

CREATE PROCEDURE [dbo].[v1_Apps_Request_Access]
	@appId INT,
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY
	IF EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblAppsUsers] WHERE [appId] = @appId AND [userId] = @userId AND [status] = 'accepted')
	BEGIN
		SELECT 'You already have access to this app!' AS [message], 70 AS [code]
		RETURN 0
	END

	IF EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblAppsUsers] WHERE [appId] = @appId AND [userId] = @userId AND [status] = 'rejected')
	BEGIN
		SELECT 'Your request for access has been rejected!' AS [message], 70 AS [code]
		RETURN 0
	END

	IF EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblAppsUsers] WHERE [appId] = @appId AND [userId] = @userId AND [status] = 'requested')
	BEGIN
		SELECT 'You have already requested access to app!' AS [message], 70 AS [code]
		RETURN 0
	END

	INSERT INTO [dbo].[tblAppsUsers]
		(
			[role],
			[appId],
			[userId],
			[status]
		)
	VALUES
		(
			0,
			@appId,
			@userId,
			'requested'
		)

	SELECT @@ROWCOUNT AS [n]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET16
/*
SET1 - CREATE PROCEDURE VERIFY
SET2 - CREATE PROCEDURE VALIDATE
SET3 - CREATE PROCEDURE REGISTER
SET4 - CREATE PROCEDURE RESET PASSWORD
SET5 - CREATE PROCEDURE CHANGE EMAIL
SET6 - CREATE PROCEDURE CHANGE PASSWORD
*/

-- SET1

PRINT 'Executing dbo.v1_Auth_Verify.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Auth_Verify' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Auth_Verify]
END
GO

CREATE PROCEDURE [dbo].[v1_Auth_Verify]
	@code INT,
	@appId INT,
	@email VARCHAR(255)
AS

SET NOCOUNT ON

BEGIN TRY

	DECLARE @url VARCHAR(255)
	DECLARE @app INT = 0
	DECLARE @icon VARCHAR(255)
	DECLARE @userId INT
	DECLARE @userCode INT
	DECLARE @nameLast VARCHAR(255)
	DECLARE @nameFirst VARCHAR(255)
	DECLARE @validated INT

	SELECT TOP 1
		@app = [id],
		@url = [url],
		@icon = [icon]
	FROM
		[dbo].[tblApps]
	WHERE
		[id] = @appId

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'App is not valid!' AS [message], 401 AS [code]
		RETURN 0
	END

	SELECT TOP 1
		@userId = [id],
		@userCode = [code],
		@nameLast = [nameLast],
		@nameFirst = [nameFirst],
		@validated = [validated]
	FROM
		[dbo].[tblUsers]
	WHERE
		[email] = @email

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'Account not found!' AS [message], 69 AS [code]
		RETURN 0
	END

	IF (@validated = 1)
	BEGIN
		SELECT 'Account already verified!' AS [message], 70 AS [code]
		RETURN 0
	END

	IF (@code != @userCode)
	BEGIN
		SELECT 'Could not verify account, invalid code/email!' AS [message], 401 AS [code]
		RETURN 0
	END

	UPDATE
		[dbo].[tblUsers]
	SET	
		[validated] = 1
	WHERE
		[code] = @code
		AND 
		[email] = @email
		AND 
		[validated] = 0

	SELECT @@ROWCOUNT AS [n], @userId AS [userId], @email AS [email], @nameLast AS [nameLast], @nameFirst AS [nameFirst], @url AS [appUrl], @icon AS [appIcon], @app AS [appAppId]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET1

-- SET2

PRINT 'Executing dbo.v1_Auth_Validate.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Auth_Validate' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Auth_Validate]
END
GO

CREATE PROCEDURE [dbo].[v1_Auth_Validate]
	@appId INT,
	@scope VARCHAR(255),
	@userId INT,
	@expiry DATETIME,
	@bearer VARCHAR(255),
	@description VARCHAR(255),
	@roles VARCHAR(50)
AS

SET NOCOUNT ON

BEGIN TRY

	DECLARE @scopeId INT
	DECLARE @tokenId INT
	
	IF NOT EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblApps] WHERE [id] = @appId)
	BEGIN
		SELECT 'App not found!' AS [message]
		RETURN 0
	END

	SELECT TOP 1
		@scopeId = [id]
	FROM
		[dbo].[tblScopes]
	WHERE
		[url] = @scope
	
	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'Scope not found!' AS [message]
		RETURN 0
	END

	SELECT TOP 1
		@tokenId = [token].[id]
	FROM
		[dbo].[tblTokens] AS [token]
	INNER JOIN
		[dbo].[tblTokensUsers] AS [user]
	ON
		[token].[id] = [user].[tokenId]
	WHERE
		[user].[userId] = @userId
		AND
		[token].[appId] = @appId
		AND
		[token].[bearer] = @bearer
		AND
		[token].[description] = @description
		AND
		[token].[roles] = @roles
	
	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'Token not found!' AS [message]
		RETURN 0
	END
	
	IF NOT EXISTS (SELECT [id] FROM [dbo].[tblTokensScopes] WHERE [scopeId] = @scopeId AND [tokenId] = @tokenId)
	BEGIN
		SELECT 'Scope not found in token! scopeId: ' + CAST(@scopeId as VARCHAR(MAX)) + ' tokenId: ' + CAST(@tokenId as VARCHAR(MAX))  AS [message]
		RETURN 0
	END
	
	IF (@expiry < GETDATE())
	BEGIN
		SELECT 'Token has expired!' AS [message]
		RETURN 0
	END

	INSERT INTO [dbo].[tblUsage]
		(
			[appId],
			[userId],
			[scopeId]
		)
	VALUES
		(
			@appId,
			@userId,
			@scopeId
		)
	SELECT SCOPE_IDENTITY() AS [_id]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET2

-- SET3

PRINT 'Executing dbo.v1_Auth_Register.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Auth_Register' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Auth_Register]
END
GO

CREATE PROCEDURE [dbo].[v1_Auth_Register]
	@nameLast VARCHAR(255) = NULL,
	@nameFirst VARCHAR(255) = NULL,
	@nameMiddle VARCHAR(255) = NULL,
	@numberTel VARCHAR(255) = NULL,
	@numberMobile VARCHAR(255) = NULL,
	@addressSame INT = NULL,
	@addressBillingStreet VARCHAR(255) = NULL,
	@addressBillingSuburb VARCHAR(255) = NULL,
	@addressBillingCountry VARCHAR(255) = NULL,
	@addressBillingCityTown VARCHAR(255) = NULL,
	@addressBillingCompanyVat VARCHAR(255) = NULL,
	@addressBillingCompanyReg VARCHAR(255) = NULL,
	@addressBillingAdditional VARCHAR(255) = NULL,
	@addressBillingPostalCode VARCHAR(255) = NULL,
	@addressPhysicalStreet VARCHAR(255) = NULL,
	@addressPhysicalSuburb VARCHAR(255) = NULL,
	@addressPhysicalCountry VARCHAR(255) = NULL,
	@addressPhysicalCityTown VARCHAR(255) = NULL,
	@addressPhysicalCompanyVat VARCHAR(255) = NULL,
	@addressPhysicalCompanyReg VARCHAR(255) = NULL,
	@addressPhysicalAdditional VARCHAR(255) = NULL,
	@addressPhysicalPostalCode VARCHAR(255) = NULL,
	@identificationType VARCHAR(255) = NULL,
	@identificationNumber VARCHAR(255) = NULL,
	@code INT,
	@salt VARCHAR(255),
	@hash VARCHAR(255),
	@email VARCHAR(255),
	@appId INT,
	@picture VARCHAR(255),
	@language VARCHAR(255),
	@timezone INT,
	@username VARCHAR(255),
	@validated INT
AS

SET NOCOUNT ON

BEGIN TRY
	DECLARE @url VARCHAR(255)
	DECLARE @app INT = 0
	DECLARE @icon VARCHAR(255)

	SELECT TOP 1
		@url = [url],
		@icon = [icon],
		@app = [id]
	FROM
		[dbo].[tblApps]
	WHERE
		[id] = @appId

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'App is not valid!' AS [message], 401 AS [code]
		RETURN 0
	END

	IF EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblUsers] WHERE [email] = @email)
	BEGIN
		SELECT 'Account already exists!' AS [message], 70 AS [code]
		RETURN 0
	END

	INSERT INTO [dbo].[tblUsers]
		(
			[nameLast],
			[nameFirst],
			[nameMiddle],
			[numberTel],
			[numberMobile],
			[addressSame],
			[addressBillingStreet],
			[addressBillingSuburb],
			[addressBillingCountry],
			[addressBillingCityTown],
			[addressBillingCompanyVat],
			[addressBillingCompanyReg],
			[addressBillingAdditional],
			[addressBillingPostalCode],
			[addressPhysicalStreet],
			[addressPhysicalSuburb],
			[addressPhysicalCountry],
			[addressPhysicalCityTown],
			[addressPhysicalCompanyVat],
			[addressPhysicalCompanyReg],
			[addressPhysicalAdditional],
			[addressPhysicalPostalCode],
			[identificationType],
			[identificationNumber],
			[code],
			[salt],
			[hash],
			[email],
			[picture],
			[language],
			[timezone],
			[username],
			[validated]
		)
	VALUES
		(
			@nameLast,
			@nameFirst,
			@nameMiddle,
			@numberTel,
			@numberMobile,
			@addressSame,
			@addressBillingStreet,
			@addressBillingSuburb,
			@addressBillingCountry,
			@addressBillingCityTown,
			@addressBillingCompanyVat,
			@addressBillingCompanyReg,
			@addressBillingAdditional,
			@addressBillingPostalCode,
			@addressPhysicalStreet,
			@addressPhysicalSuburb,
			@addressPhysicalCountry,
			@addressPhysicalCityTown,
			@addressPhysicalCompanyVat,
			@addressPhysicalCompanyReg,
			@addressPhysicalAdditional,
			@addressPhysicalPostalCode,
			@identificationType,
			@identificationNumber,
			@code,
			@salt,
			@hash,
			@email,
			@picture,
			@language,
			@timezone,
			@username,
			@validated
		)

	SELECT SCOPE_IDENTITY() AS [_id], @code AS [code], @email AS [email], @nameLast AS [nameLast], @nameFirst AS [nameFirst], @url AS [appUrl], @icon AS [appIcon], @app AS [appAppId]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET3

-- SET4

PRINT 'Executing dbo.v1_Auth_Reset_Password.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Auth_Reset_Password' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Auth_Reset_Password]
END
GO

CREATE PROCEDURE [dbo].[v1_Auth_Reset_Password]
	@salt VARCHAR(255),
	@hash VARCHAR(255),
	@email VARCHAR(255),
	@appId INT
AS

SET NOCOUNT ON

BEGIN TRY

	DECLARE @url VARCHAR(255)
	DECLARE @app INT = 0
	DECLARE @icon VARCHAR(255)
	DECLARE @userId INT
	DECLARE @nameLast VARCHAR(255)
	DECLARE @nameFirst VARCHAR(255)
	DECLARE @validated INT
	
	SELECT TOP 1
		@userId = [id],
		@nameLast = [nameLast],
		@nameFirst = [nameFirst],
		@validated = [validated]
	FROM
		[dbo].[tblUsers]
	WHERE
		[email] = @email

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'Account does not exist!' AS [message], 69 AS [code]
		RETURN 0
	END

	IF (@validated = 0)
	BEGIN
		SELECT 'Account requires verification, please check email!' AS [message], 401 AS [code]
		RETURN 0
	END

	SELECT TOP 1
		@app = [id],
		@url = [url],
		@icon = [icon]
	FROM
		[dbo].[tblApps]
	WHERE
		[id] = @appId

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'App is not valid!' AS [message], 401 AS [code]
		RETURN 0
	END
	
	UPDATE
		[dbo].[tblUsers]
	SET
		[salt] = @salt,
		[hash] = @hash
	WHERE
		[id] = @userId
	
	SELECT @email AS [email],  @userId AS [userId], @nameLast AS [nameLast], @nameFirst AS [nameFirst], @url AS [appUrl], @icon AS [appIcon], @app AS [appAppId]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET4

-- SET5

PRINT 'Executing dbo.v1_Auth_Change_Email.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Auth_Change_Email' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Auth_Change_Email]
END
GO

CREATE PROCEDURE [dbo].[v1_Auth_Change_Email]
	@email VARCHAR(255),
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY
	IF EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblUsers] WHERE [id] != @userId AND [email] = @email)
	BEGIN
		SELECT 'An account with email address of ' + @email + ' already exists!' AS [message], 70 AS [code]
		RETURN 0
	END

	UPDATE
		[dbo].[tblUsers]
	SET	
		[email] = @email
	WHERE
		[id] = @userId

	SELECT @@ROWCOUNT AS [n]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET5

-- SET6

PRINT 'Executing dbo.v1_Auth_Change_Password.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Auth_Change_Password' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Auth_Change_Password]
END
GO

CREATE PROCEDURE [dbo].[v1_Auth_Change_Password]
	@salt VARCHAR(255),
	@hash VARCHAR(255),
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY
	UPDATE
		[dbo].[tblUsers]
	SET	
		[salt] = @salt,
		[hash] = @hash
	WHERE
		[id] = @userId

	SELECT @@ROWCOUNT AS [n]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET6
/*
SET1 - CREATE PROCEDURE ADD
SET2 - CREATE PROCEDURE GET
SET3 - CREATE PROCEDURE LIST
SET4 - CREATE PROCEDURE LOAD
SET5 - CREATE PROCEDURE UPDATE
SET6 - CREATE PROCEDURE DELETE
*/

-- SET1

PRINT 'Executing dbo.v1_Features_Add.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Features_Add' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Features_Add]
END
GO

CREATE PROCEDURE [dbo].[v1_Features_Add]
	@appId INT,
	@title VARCHAR(255),
	@userId INT,
	@description VARCHAR(255)
AS

SET NOCOUNT ON

BEGIN TRY
	IF EXISTS (SELECT TOP 1 [appId] FROM [dbo].[tblAppsUsers] WHERE [role] >= 2 AND [appId] = @appId AND [userId] = @userId)
	BEGIN
		INSERT INTO [dbo].[tblFeatures]
			(
				[appId],
				[title],
				[userId],
				[description]
			)
		VALUES
			(
				@appId,
				@title,
				@userId,
				@description
			)
		
		SELECT SCOPE_IDENTITY() AS [_id]
		RETURN 1
	END
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET1

-- SET2

PRINT 'Executing dbo.v1_Features_Get.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Features_Get' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Features_Get]
END
GO

CREATE PROCEDURE [dbo].[v1_Features_Get]
	@userId INT,
	@featureId INT
AS

SET NOCOUNT ON

BEGIN TRY
	SELECT
		[feature].[id] AS [_id],
		[app].[icon] AS [appIcon],
		[app].[name] AS [appName],
		[user].[role],
		[feature].[title],
		[feature].[appId],
		[feature].[description]
	FROM
		[dbo].[tblFeatures] AS [feature]
	INNER JOIN
		[dbo].[tblApps] AS [app]
	ON
		[feature].[appId] = [app].[id]
	INNER JOIN
		[dbo].[tblAppsUsers] AS [user]
	ON
		[app].[id] = [user].[appId]
	WHERE
		[user].[role] >= 1
		AND
		[user].[userId] = @userId
		AND
		[feature].[id] = @featureId

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'No records found!' AS [message], 69 AS [code]
		RETURN 0
	END

	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET2

-- SET3

PRINT 'Executing dbo.v1_Features_List.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Features_List' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Features_List]
END
GO

CREATE PROCEDURE [dbo].[v1_Features_List]
	@appId VARCHAR(MAX),
	@userId INT,
	@featureId VARCHAR(MAX)
AS

SET NOCOUNT ON

BEGIN TRY
	SELECT
		[feature].[id] AS [_id],
		[app].[icon] AS [appIcon],
		[app].[name] AS [appName],
		[user].[role],
		[feature].[title],
		[feature].[appId],
		[feature].[description]
	FROM
		[dbo].[tblFeatures] AS [feature]
	INNER JOIN
		[dbo].[tblApps] AS [app]
	ON
		[feature].[appId] = [app].[id]
	INNER JOIN
		[dbo].[tblAppsUsers] AS [user]
	ON
		[app].[id] = [user].[appId]
	WHERE
		[user].[role] >= 1
		AND
		[user].[userId] = @userId
		AND
		(@appId IS NULL OR [feature].[appId] IN (SELECT value FROM STRING_SPLIT(@appId, ',')))
		AND
		(@featureId IS NULL OR [feature].[id] IN (SELECT value FROM STRING_SPLIT(@featureId, ',')))

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'No records found!' AS [message], 69 AS [code]
		RETURN 0
	END

	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET3

-- SET4


PRINT 'Executing dbo.v1_Features_Update.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Features_Update' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Features_Update]
END
GO

CREATE PROCEDURE [dbo].[v1_Features_Update]
	@title VARCHAR(255),
	@userId INT,
	@featureId INT,
	@description VARCHAR(255)
AS

SET NOCOUNT ON

BEGIN TRY
    DECLARE @role INT = 0
	DECLARE @updated INT = 0
    
    SELECT TOP 1
		@role = [role]
	FROM
		[dbo].[tblFeatures] AS [feature]
	INNER JOIN
		[dbo].[tblAppsUsers] AS [user]
	ON
		[feature].[appId] = [user].[appId]
	WHERE
		[feature].[id] = @featureId
	
    IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'App does not exist!' AS [message], 69 AS [code]
		RETURN 0
	END

	IF (@role <= 2)
	BEGIN
		SELECT 'You cannot update this feature!' AS [message], 503 AS [code]
		RETURN 0
	END
	
    UPDATE [dbo].[tblFeatures] SET [title] = @title WHERE [id] = @featureId AND @title IS NOT NULL
    SET @updated = @updated + @@ROWCOUNT

    UPDATE [dbo].[tblFeatures] SET [description] = @description WHERE [id] = @featureId AND @description IS NOT NULL
    SET @updated = @updated + @@ROWCOUNT
    
    SELECT @updated AS [n]
    RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET4

-- SET5

PRINT 'Executing dbo.v1_Features_Delete.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Features_Delete' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Features_Delete]
END
GO

CREATE PROCEDURE [dbo].[v1_Features_Delete]
	@userId INT,
	@featureId INT
AS

SET NOCOUNT ON

BEGIN TRY
    DECLARE @role INT = 0
    
    SELECT TOP 1
		@role = [role]
	FROM
		[dbo].[tblFeatures] AS [feature]
	INNER JOIN
		[dbo].[tblAppsUsers] AS [user]
	ON
		[feature].[appId] = [user].[appId]
	WHERE
		[feature].[id] = @featureId
	
    IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'App does not exist!' AS [message], 69 AS [code]
		RETURN 0
	END

	IF (@role <= 2)
	BEGIN
		SELECT 'You cannot delete this feature!' AS [message], 503 AS [code]
		RETURN 0
	END
	
    DELETE FROM
		[dbo].[tblFeatures]
	WHERE
		[id] = @featureId
    
    SELECT @@ROWCOUNT AS [n]
    RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET5
/*
SET1 - CREATE PROCEDURE ADD
SET2 - CREATE PROCEDURE GET
SET3 - CREATE PROCEDURE LIST
SET4 - CREATE PROCEDURE LOAD
SET5 - CREATE PROCEDURE UPDATE
SET6 - CREATE PROCEDURE DELETE
*/

-- SET1

PRINT 'Executing dbo.v1_Scopes_Add.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Scopes_Add' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Scopes_Add]
END
GO

CREATE PROCEDURE [dbo].[v1_Scopes_Add]
	@url VARCHAR(255),
	@appId INT,
	@userId INT,
	@description VARCHAR(255)
AS

SET NOCOUNT ON

BEGIN TRY
	IF EXISTS (SELECT TOP 1 [appId] FROM [dbo].[tblAppsUsers] WHERE [role] >= 2 AND [appId] = @appId AND [userId] = @userId)
	BEGIN
		INSERT INTO [dbo].[tblScopes]
			(
				[url],
				[appId],
				[userId],
				[description]
			)
		VALUES
			(
				@url,
				@appId,
				@userId,
				@description
			)
		
		SELECT SCOPE_IDENTITY() AS [_id]
		RETURN 1
	END
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET1

-- SET2

PRINT 'Executing dbo.v1_Scopes_Get.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Scopes_Get' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Scopes_Get]
END
GO

CREATE PROCEDURE [dbo].[v1_Scopes_Get]
	@userId INT,
	@scopeId INT
AS

SET NOCOUNT ON

BEGIN TRY
	SELECT
		[scope].[id] AS [_id],
		[app].[icon] AS [appIcon],
		[app].[name] AS [appName],
		[user].[role],
		[scope].[url],
		[scope].[appId],
		[scope].[description]
	FROM
		[dbo].[tblScopes] AS [scope]
	INNER JOIN
		[dbo].[tblApps] AS [app]
	ON
		[scope].[appId] = [app].[id]
	INNER JOIN
		[dbo].[tblAppsUsers] AS [user]
	ON
		[app].[id] = [user].[appId]
	WHERE
		[user].[role] >= 1
		AND
		[user].[userId] = @userId
		AND
		[scope].[id] = @scopeId

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'No records found!' AS [message], 69 AS [code]
		RETURN 0
	END

	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET2

-- SET3

PRINT 'Executing dbo.v1_Scopes_List.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Scopes_List' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Scopes_List]
END
GO

CREATE PROCEDURE [dbo].[v1_Scopes_List]
	@appId VARCHAR(MAX),
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY
	SELECT
		[user].[role],
		[scope].[url],
		[scope].[appId],
		[scope].[description],
		[scope].[id] AS [_id],
		[app].[icon] AS [appIcon],
		[app].[name] AS [appName]
	FROM
		[dbo].[tblScopes] AS [scope]
	INNER JOIN
		[dbo].[tblApps] AS [app]
	ON
		[scope].[appId] = [app].[id]
	INNER JOIN
		[dbo].[tblAppsUsers] AS [user]
	ON
		[app].[id] = [user].[appId]
	WHERE
		[user].[role] >= 1
		AND
		[user].[userId] = @userId
		AND
		(@appId IS NULL OR [scope].[appId] IN (SELECT value FROM STRING_SPLIT(@appId, ',')))
	
	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'No records found!' AS [message], 69 AS [code]
		RETURN 0
	END

	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET3

-- SET4

PRINT 'Executing dbo.v1_Scopes_Load.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Scopes_Load' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Scopes_Load]
END
GO

CREATE PROCEDURE [dbo].[v1_Scopes_Load]
AS

SET NOCOUNT ON

BEGIN TRY
	SELECT
		[id] AS [_id],
		[url],
		[appId],
		[description]
	FROM
		[dbo].[tblScopes]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET4

-- SET5

PRINT 'Executing dbo.v1_Scopes_Update.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Scopes_Update' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Scopes_Update]
END
GO

CREATE PROCEDURE [dbo].[v1_Scopes_Update]
	@url VARCHAR(255),
	@userId INT,
	@scopeId INT,
	@description VARCHAR(255)
AS

SET NOCOUNT ON

BEGIN TRY
    DECLARE @role INT = 0
	DECLARE @updated INT = 0
    
    SELECT TOP 1
		@role = [role]
	FROM
		[dbo].[tblScopes] AS [scope]
	INNER JOIN
		[dbo].[tblAppsUsers] AS [user]
	ON
		[scope].[appId] = [user].[appId]
	WHERE
		[scope].[id] = @scopeId
	
    IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'App does not exist!' AS [message], 69 AS [code]
		RETURN 0
	END

	IF (@role <= 2)
	BEGIN
		SELECT 'You cannot update this scope!' AS [message], 503 AS [code]
		RETURN 0
	END
	
    UPDATE [dbo].[tblScopes] SET [url] = @url WHERE [id] = @scopeId AND @url IS NOT NULL
    SET @updated = @updated + @@ROWCOUNT

    UPDATE [dbo].[tblScopes] SET [description] = @description WHERE [id] = @scopeId AND @description IS NOT NULL
    SET @updated = @updated + @@ROWCOUNT
    
    SELECT @updated AS [n]
    RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET5

-- SET6

PRINT 'Executing dbo.v1_Scopes_Delete.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Scopes_Delete' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Scopes_Delete]
END
GO

CREATE PROCEDURE [dbo].[v1_Scopes_Delete]
	@userId INT,
	@scopeId INT
AS

SET NOCOUNT ON

BEGIN TRY
    DECLARE @role INT = 0
    
    SELECT TOP 1
		@role = [role]
	FROM
		[dbo].[tblScopes] AS [scope]
	INNER JOIN
		[dbo].[tblAppsUsers] AS [user]
	ON
		[scope].[appId] = [user].[appId]
	WHERE
		[scope].[id] = @scopeId
	
    IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'App does not exist!' AS [message], 69 AS [code]
		RETURN 0
	END

	IF (@role <= 2)
	BEGIN
		SELECT 'You cannot delete this scope!' AS [message], 503 AS [code]
		RETURN 0
	END
	
    DELETE FROM
		[dbo].[tblScopes]
	WHERE
		[id] = @scopeId
    
    SELECT @@ROWCOUNT AS [n]
    RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET6
/*
SET1 - CREATE PROCEDURE ADD
SET2 - CREATE PROCEDURE ADD USER
SET3 - CREATE PROCEDURE ADD SCOPE
SET4 - CREATE PROCEDURE GET
SET5 - CREATE PROCEDURE LIST
SET6 - CREATE PROCEDURE SHARE
SET7 - CREATE PROCEDURE REVOKE
SET8 - CREATE PROCEDURE UNSUBSCRIBE
SET9 - CREATE PROCEDURE UPDATE SUBSCRIBER
SET10 - CREATE PROCEDURE RETRIEVE
SET11 - CREATE PROCEDURE DOWNLOAD
SET12 - CREATE PROCEDURE REVOKE SELF
*/

-- SET1

PRINT 'Executing dbo.v1_Tokens_Add.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Tokens_Add' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Tokens_Add]
END
GO

CREATE PROCEDURE [dbo].[v1_Tokens_Add]
	@appId INT,
	@userId INT,
	@bearer VARCHAR(255),
	@device VARCHAR(255),
	@expiry DATETIME,
	@timezone INT,
	@description VARCHAR(255),
	@roles VARCHAR(50)
AS

SET NOCOUNT ON

BEGIN TRY
	INSERT INTO [dbo].[tblTokens]
		(
			[appId],
			[userId],
			[bearer],
			[device],
			[expiry],
			[timezone],
			[description],
			[roles]
		)
	VALUES
		(
			@appId,
			@userId,
			@bearer,
			@device,
			@expiry,
			@timezone,
			@description,
			@roles
		)
	
	SELECT SCOPE_IDENTITY() AS [_id]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET1

-- SET2

PRINT 'Executing dbo.v1_Tokens_Add_User.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Tokens_Add_User' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Tokens_Add_User]
END
GO

CREATE PROCEDURE [dbo].[v1_Tokens_Add_User]
	@role INT,
	@userId INT,
	@tokenId INT
AS

SET NOCOUNT ON

BEGIN TRY
	IF EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblTokensUsers] WHERE [tokenId] = @tokenId AND [userId] = @userId)
	BEGIN
		SELECT 'User already shared to token!' AS [message], 70 AS [code]
		RETURN 0
	END

	INSERT INTO [dbo].[tblTokensUsers]
		(
			[role],
			[userId],
			[tokenId]
		)
	VALUES
		(
			@role,
			@userId,
			@tokenId
		)
	
	SELECT SCOPE_IDENTITY() AS [_id]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET2

-- SET3

PRINT 'Executing dbo.v1_Tokens_Add_Scope.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Tokens_Add_Scope' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Tokens_Add_Scope]
END
GO

CREATE PROCEDURE [dbo].[v1_Tokens_Add_Scope]
	@userId INT,
	@scopeId INT,
	@tokenId INT
AS

SET NOCOUNT ON

BEGIN TRY
	IF EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblTokensScopes] WHERE [tokenId] = @tokenId AND [scopeId] = @scopeId)
	BEGIN
		SELECT 'Scope already linked to token!' AS [message], 70 AS [code]
		RETURN 0
	END

	INSERT INTO [dbo].[tblTokensScopes]
		(
			[userId],
			[scopeId],
			[tokenId]
		)
	VALUES
		(
			@userId,
			@scopeId,
			@tokenId
		)
	
	SELECT SCOPE_IDENTITY() AS [_id]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET3

-- SET4

PRINT 'Executing dbo.v1_Tokens_Get.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Tokens_Get' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Tokens_Get]
END
GO

CREATE PROCEDURE [dbo].[v1_Tokens_Get]
	@userId INT,
	@tokenId INT
AS

SET NOCOUNT ON

BEGIN TRY

	SELECT
		[user].[role],
		[scope].[url],
		[user].[userId],
		[token].[device],
		[token].[expiry],
		[token].[id] AS [_id],
		[token].[description],
		[token].[roles],
		[app].[id] AS [appAppId],
		[app].[icon] AS [appIcon],
		[app].[name] AS [appName]
	FROM
		[dbo].[tblTokens] AS [token]
	INNER JOIN
		[dbo].[tblTokensUsers] AS [user]
	ON
		[token].[id] = [user].[tokenId]
	INNER JOIN
		[dbo].[tblTokensScopes] AS [ts]
	ON
		[user].[tokenId] = [ts].[tokenId]
	INNER JOIN
		[dbo].[tblScopes] AS [scope]
	ON
		[scope].[id] = [ts].[scopeId]
	INNER JOIN
		[dbo].[tblApps] AS [app]
	ON
		[token].[appId] = [app].[id]
	WHERE
		[token].[id] IN (SELECT [tokenId] FROM [dbo].[tblTokensUsers] WHERE [userId] = @userId AND [tokenId] = @tokenId)
	
	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'No records found!' AS [message], 69 AS [code]
		RETURN 0
	END

	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET4

-- SET5

PRINT 'Executing dbo.v1_Tokens_List.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Tokens_List' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Tokens_List]
END
GO

CREATE PROCEDURE [dbo].[v1_Tokens_List]
	@appId VARCHAR(MAX),
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY

	SELECT
		[user].[role],
		[scope].[url],
		[user].[userId],
		[token].[device],
		[token].[expiry],
		[token].[id] AS [_id],
		[token].[description],
		[token].[roles],
		[token].[roles],
		[app].[id] AS [appAppId],
		[app].[icon] AS [appIcon],
		[app].[name] AS [appName]
	FROM
		[dbo].[tblTokens] AS [token]
	INNER JOIN
		[dbo].[tblTokensUsers] AS [user]
	ON
		[token].[id] = [user].[tokenId]
	INNER JOIN
		[dbo].[tblTokensScopes] AS [ts]
	ON
		[user].[tokenId] = [ts].[tokenId]
	INNER JOIN
		[dbo].[tblScopes] AS [scope]
	ON
		[scope].[id] = [ts].[scopeId]
	INNER JOIN
		[dbo].[tblApps] AS [app]
	ON
		[token].[appId] = [app].[id]
	WHERE
		(@appId IS NULL OR [token].[appId] IN (SELECT value FROM STRING_SPLIT(@appId, ',')))
		AND
		[token].[id] IN (SELECT [tokenId] FROM [dbo].[tblTokensUsers] WHERE [userId] = @userId)
	
	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'No records found!' AS [message], 69 AS [code]
		RETURN 0
	END

	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET5

-- SET6

PRINT 'Executing dbo.v1_Tokens_Share.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Tokens_Share' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Tokens_Share]
END
GO

CREATE PROCEDURE [dbo].[v1_Tokens_Share]
	@role INT,
	@tokenId INT,
	@email VARCHAR(255),
	@adminId INT
AS

SET NOCOUNT ON

BEGIN TRY
	DECLARE @userId INT = 0
	DECLARE @adminrole INT = 0

	SELECT TOP 1
		@userId = [id]
	FROM
		[dbo].[tblUsers]
	WHERE
		[email] = @email

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'This user does not have an account on the system!' AS [message], 401 AS [code]
		RETURN 0
	END

	SELECT TOP 1
		@adminrole = [role]
	FROM
		[dbo].[tblTokensUsers]
	WHERE
		[userId] = @adminId
		AND
		[tokenId] = @tokenId

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'You are not a user on this token!' AS [message], 401 AS [code]
		RETURN 0
	END

	IF (@adminrole < 4)
	BEGIN
		SELECT 'You are not an admin on this token!' AS [message], 401 AS [code]
		RETURN 0
	END

	IF EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblTokensUsers] WHERE [userId] = @userId AND [tokenId] = @tokenId)
	BEGIN
		SELECT 'User already shared to token!' AS [message], 70 AS [code]
		RETURN 0
	END

	INSERT INTO [dbo].[tblTokensUsers]
		(
			[role],
			[userId],
			[tokenId]
		)
	VALUES
		(
			@role,
			@userId,
			@tokenId
		)

	SELECT @@ROWCOUNT AS [n], @userId AS [userId]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET6

-- SET7

PRINT 'Executing dbo.v1_Tokens_Revoke.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Tokens_Revoke' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Tokens_Revoke]
END
GO

CREATE PROCEDURE [dbo].[v1_Tokens_Revoke]
	@userId INT,
	@tokenId INT
AS

SET NOCOUNT ON

BEGIN TRY
	BEGIN TRAN
		
		DECLARE @deleted INT = 0
		
		IF EXISTS (SELECT TOP 1 [tokenId] FROM [dbo].[tblTokensUsers] WHERE [role] = 5 AND [userId] = @userId AND [tokenId] = @tokenId)
		BEGIN

			DELETE FROM
				[dbo].[tblTokens]
			WHERE
				[id] = @tokenId
			
			SET @deleted = @deleted + @@ROWCOUNT

			DELETE FROM
				[dbo].[tblTokensUsers]
			WHERE
				[tokenId] = @tokenId
			
			SET @deleted = @deleted + @@ROWCOUNT
			
			DELETE FROM
				[dbo].[tblTokensScopes]
			WHERE
				[tokenId] = @tokenId
			
			SET @deleted = @deleted + @@ROWCOUNT
		END

	COMMIT TRAN

	SELECT @deleted AS [n]
	RETURN 1
END TRY

BEGIN CATCH
	ROLLBACK TRAN
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET7

-- SET8

PRINT 'Executing dbo.v1_Tokens_Unsubscribe.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Tokens_Unsubscribe' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Tokens_Unsubscribe]
END
GO

CREATE PROCEDURE [dbo].[v1_Tokens_Unsubscribe]
	@userId INT,
	@tokenId INT,
	@adminId INT
AS

SET NOCOUNT ON

BEGIN TRY
	DECLARE @id INT
	DECLARE @role INT = 0
	DECLARE @deleted INT = 0

	SELECT TOP 1
		@id = [tokenId],
		@role = [role]
	FROM
		[dbo].[tblTokensUsers]
	WHERE
		[tokenId] = @tokenId
		AND
		[userId] = @adminId

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'You are not a user on this token!' AS [message], 503 AS [code]
		RETURN 0
	END

	IF (@userId = @adminId AND @role = 5)
	BEGIN
		SELECT 'An owner can not unsubscribe from their tokens' AS [message], 503 AS [code]
		RETURN 0
	END

	IF (@userId != @adminId AND @role < 4)
	BEGIN
		SELECT 'Only administrators can unsubscribe other users from tokens' AS [message], 503 AS [code]
		RETURN 0
	END

	DELETE FROM
		[dbo].[tblTokensUsers]
	WHERE
		[tokenId] = @tokenId
		AND
		[userId] = @userId

	SELECT @@ROWCOUNT AS [n]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET8

-- SET9

PRINT 'Executing dbo.v1_Tokens_Update_Subscriber.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Tokens_Update_Subscriber' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Tokens_Update_Subscriber]
END
GO

CREATE PROCEDURE [dbo].[v1_Tokens_Update_Subscriber]
	@role INT,
	@userId INT,
	@adminId INT,
	@tokenId INT
AS

SET NOCOUNT ON

BEGIN TRY
	IF (@userId = @adminId)
		BEGIN
			SELECT 'You cannot update yourself as a subscriber!' AS [message]
			RETURN 0
		END
	ELSE
		IF EXISTS (SELECT TOP 1 [tokenId] FROM [dbo].[tblTokensUsers] WHERE [role] >= 4 AND [userId] = @adminId AND [tokenId] = @tokenId)
		BEGIN
			UPDATE 
				[dbo].[tblTokensUsers]
			SET
				[role] = @role
			WHERE
				[userId] = @userId
				AND
				[tokenId] = @tokenId
			
			SELECT @@ROWCOUNT AS [n]
			RETURN 1
		END
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET9

-- SET10

PRINT 'Executing dbo.v1_Tokens_Retrieve.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Tokens_Retrieve' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Tokens_Retrieve]
END
GO

CREATE PROCEDURE [dbo].[v1_Tokens_Retrieve]
	@userId INT,
	@tokenId INT
AS

SET NOCOUNT ON

BEGIN TRY
	SELECT
		[token].[id] AS [_id],
		[token].[device],
		[token].[expiry],
		[token].[bearer],
		[scope].[scopeId],
		[token].[timezone],
		[token].[description],
		[token].[roles]
	FROM
		[dbo].[tblTokens] AS [token]
	INNER JOIN
		[dbo].[tblTokensUsers] AS [user]
	ON
		[token].[id] = [user].[tokenId]
	INNER JOIN
		[dbo].[tblTokensScopes] AS [scope]
	ON
		[user].[tokenId] = [scope].[tokenId]
	WHERE
		[user].[userId] = @userId
		AND
		[token].[id] = @tokenId
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET10

-- SET11

PRINT 'Executing dbo.v1_Tokens_Download.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Tokens_Download' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Tokens_Download]
END
GO

CREATE PROCEDURE [dbo].[v1_Tokens_Download]
	@userId INT,
	@tokenId INT
AS

SET NOCOUNT ON

BEGIN TRY
	SELECT
		t.[id] AS [_id],
		[device],
		[expiry],
		[bearer],
		[timezone],
		ts.[scopeId],
		[description],
		t.[roles]
	FROM
		[dbo].[tblTokens] AS t
	INNER JOIN
		[dbo].[tblTokensScopes] AS ts
	ON
		t.[id] = ts.[tokenId]
	WHERE
		t.[id] IN (SELECT [tokenId] FROM [dbo].[tblTokensUsers] WHERE [userId] = @userId AND [tokenId] = @tokenId)
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET11

-- SET12

PRINT 'Executing dbo.v1_Tokens_Revoke_Self.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Tokens_Revoke_Self' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Tokens_Revoke_Self]
END
GO

CREATE PROCEDURE [dbo].[v1_Tokens_Revoke_Self]
	@appId INT,
	@userId INT,
	@bearer VARCHAR(255),
	@description VARCHAR(255)
AS

SET NOCOUNT ON

BEGIN TRY
	DECLARE @tokenId INT
	DECLARE @deleted INT = 0
	
	SELECT TOP 1
		@tokenId = [token].[id]
	FROM
		[dbo].[tblTokens] AS [token]
	INNER JOIN
		[dbo].[tblTokensUsers] AS [user]
	ON
		[token].[id] = [user].[tokenId]
	WHERE
		[user].[userId] = @userId
		AND
		[token].[appId] = @appId
		AND
		[token].[bearer] = @bearer
		AND
		[token].[description] = @description

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'Token was not found!' AS [message], 69 AS [code]
		RETURN 0
	END

	DELETE FROM
		[dbo].[tblTokens]
	WHERE
		[id] = @tokenId

	SET @deleted = @deleted + @@ROWCOUNT

	DELETE FROM
		[dbo].[tblTokensUsers]
	WHERE
		[tokenId] = @tokenId

	SET @deleted = @deleted + @@ROWCOUNT

	DELETE FROM
		[dbo].[tblTokensScopes]
	WHERE
		[tokenId] = @tokenId

	SET @deleted = @deleted + @@ROWCOUNT

	SELECT @deleted AS [n]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET12
/*
SET1 - CREATE PROCEDURE ADD
SET2 - CREATE PROCEDURE LIST
*/

-- SET1

PRINT 'Executing dbo.v1_Usage_Add.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Usage_Add' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Usage_Add]
END
GO

CREATE PROCEDURE [dbo].[v1_Usage_Add]
	@scope VARCHAR(255),
	@appId INT,
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY
	DECLARE @scopeId INT
	
	SELECT TOP 1
		@scopeId = [id]
	FROM
		[dbo].[tblScopes]
	WHERE
		[url] = @scope
	
	IF (@scopeId > 0)
        BEGIN
            INSERT INTO [dbo].[tblUsage]
                (
                    [appId],
                    [userId],
                    [scopeId]
                )
            VALUES
                (
                    @appId,
                    @userId,
                    @scopeId
                )
            SELECT SCOPE_IDENTITY() AS [_id]
            RETURN 1
        END
	ELSE
		SELECT 'Scope was not found!' AS [message]
		RETURN 0
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message]
	RETURN 0
END CATCH
GO

-- SET1

-- SET2

PRINT 'Executing dbo.v1_Usage_List.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Usage_List' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Usage_List]
END
GO

CREATE PROCEDURE [dbo].[v1_Usage_List]
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY
	SELECT
		[app].[name],
		[scope].[url],
		[scope].[description],
		[usage].[appId],
		[usage].[userId],
		[usage].[scopeId],
		[usage].[serverDate]
	FROM
		[dbo].[tblUsage] AS [usage]
	INNER JOIN
		[dbo].[tblApps] AS [app]
	ON
		[usage].[appId] = [app].[id]
	INNER JOIN
		[dbo].[tblScopes] AS [scope]
	ON
		[usage].[scopeId] = [scope].[id]
	WHERE
		[usage].[userId] = @userId
	
	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'No records found!' AS [message], 69 AS [code]
		RETURN 0
	END

	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message]
	RETURN 0
END CATCH
GO

-- SET2
/*
SET1 - CREATE PROCEDURE GET
SET2 - CREATE PROCEDURE GET BY EMAIL
SET3 - CREATE PROCEDURE LIST
SET4 - CREATE PROCEDURE DELETE
SET5 - CREATE PROCEDURE UPDATE
*/

-- SET1

PRINT 'Executing dbo.v1_Users_Get.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Users_Get' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Users_Get]
END
GO

CREATE PROCEDURE [dbo].[v1_Users_Get]
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY
	IF NOT EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblUsers] WHERE [id] = @userId)
	BEGIN
		SELECT 'Account not found!' AS [message], 69 AS [code]
		RETURN 0
	END

	SELECT
		[id] AS [_id],
		[nameLast],
		[nameFirst],
		[nameMiddle],
		[numberTel],
		[numberMobile],
		[addressSame],
		[addressBillingStreet],
		[addressBillingSuburb],
		[addressBillingCountry],
		[addressBillingCityTown],
		[addressBillingCompanyVat],
		[addressBillingCompanyReg],
		[addressBillingAdditional],
		[addressBillingPostalCode],
		[addressPhysicalStreet],
		[addressPhysicalSuburb],
		[addressPhysicalCountry],
		[addressPhysicalCityTown],
		[addressPhysicalCompanyVat],
		[addressPhysicalCompanyReg],
		[addressPhysicalAdditional],
		[addressPhysicalPostalCode],
		[identificationType],
		[identificationNumber],
		[code],
		[salt],
		[hash],
		[email],
		[picture],
		[language],
		[timezone],
		[username],
		[validated],
		[serverDate],
		[signature]
	FROM
		[dbo].[tblUsers]
	WHERE
		[id] = @userId
	
	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'No records found!' AS [message], 69 AS [code]
		RETURN 0
	END

	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET1

-- SET2

PRINT 'Executing dbo.v1_Users_Get_By_Email.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Users_Get_By_Email' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Users_Get_By_Email]
END
GO

CREATE PROCEDURE [dbo].[v1_Users_Get_By_Email]
	@email VARCHAR(255)
AS

SET NOCOUNT ON

BEGIN TRY
	IF NOT EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblUsers] WHERE [email] = @email)
	BEGIN
		SELECT 'Account not found!' AS [message], 69 AS [code]
		RETURN 0
	END

	SELECT
		[id] AS [_id],
		[nameLast],
		[nameFirst],
		[nameMiddle],
		[numberTel],
		[numberMobile],
		[addressSame],
		[addressBillingStreet],
		[addressBillingSuburb],
		[addressBillingCountry],
		[addressBillingCityTown],
		[addressBillingCompanyVat],
		[addressBillingCompanyReg],
		[addressBillingAdditional],
		[addressBillingPostalCode],
		[addressPhysicalStreet],
		[addressPhysicalSuburb],
		[addressPhysicalCountry],
		[addressPhysicalCityTown],
		[addressPhysicalCompanyVat],
		[addressPhysicalCompanyReg],
		[addressPhysicalAdditional],
		[addressPhysicalPostalCode],
		[identificationType],
		[identificationNumber],
		[code],
		[salt],
		[hash],
		[email],
		[picture],
		[language],
		[timezone],
		[username],
		[validated],
		[serverDate],
		[signature]
	FROM
		[dbo].[tblUsers]
	WHERE
		[email] = @email
	
	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'No records found!' AS [message], 69 AS [code]
		RETURN 0
	END

	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET2

-- SET3

PRINT 'Executing dbo.v1_Users_List.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Users_List' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Users_List]
END
GO

CREATE PROCEDURE [dbo].[v1_Users_List]
	@email VARCHAR(MAX),
	@appId INT,
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY
	IF EXISTS (SELECT TOP 1 [appId] FROM [dbo].[tblAppsUsers] WHERE [role] >= 1 AND [appId] = @appId AND [userId] = @userId)
	BEGIN
		IF NOT EXISTS (SELECT TOP 1 [id] FROM [dbo].[tblUsers])
		BEGIN
			SELECT 'Account not found!' AS [message], 69 AS [code]
			RETURN 0
		END

		SELECT
			[id] AS [_id],
			[nameLast],
			[nameFirst],
			[nameMiddle],
			[numberTel],
			[numberMobile],
			[addressSame],
			[addressBillingStreet],
			[addressBillingSuburb],
			[addressBillingCountry],
			[addressBillingCityTown],
			[addressBillingCompanyVat],
			[addressBillingCompanyReg],
			[addressBillingAdditional],
			[addressBillingPostalCode],
			[addressPhysicalStreet],
			[addressPhysicalSuburb],
			[addressPhysicalCountry],
			[addressPhysicalCityTown],
			[addressPhysicalCompanyVat],
			[addressPhysicalCompanyReg],
			[addressPhysicalAdditional],
			[addressPhysicalPostalCode],
			[identificationType],
			[identificationNumber],
			[code],
			[salt],
			[hash],
			[email],
			[picture],
			[language],
			[timezone],
			[username],
			[validated],
			[serverDate],
			[signature]
		FROM
			[dbo].[tblUsers]
		WHERE
			(@email IS NULL OR [email] LIKE @email)
	
		IF (@@ROWCOUNT = 0)
		BEGIN
			SELECT 'No records found!' AS [message], 69 AS [code]
			RETURN 0
		END
		
		RETURN 1
	END
	
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message]
	RETURN 0
END CATCH
GO

-- SET3

-- SET4

PRINT 'Executing dbo.v1_Users_Delete.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Users_Delete' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Users_Delete]
END
GO

CREATE PROCEDURE [dbo].[v1_Users_Delete]
	@userId INT
AS

SET NOCOUNT ON

BEGIN TRY
	DECLARE @deleted INT = 0

	DELETE FROM
		[dbo].[tblUsers]
	WHERE
		[id] = @userId

	SET @deleted = @deleted + @@ROWCOUNT

	SELECT @deleted AS [n]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET4

-- SET5

PRINT 'Executing dbo.v1_Users_Update.PRC'
GO

IF EXISTS (SELECT * FROM sys.objects WHERE name = 'v1_Users_Update' AND type = 'P')
BEGIN
	DROP PROCEDURE [dbo].[v1_Users_Update]
END
GO

CREATE PROCEDURE [dbo].[v1_Users_Update]
	@userId INT,
	@picture VARCHAR(255),
	@nameLast VARCHAR(255),
	@language VARCHAR(255),
	@timezone INT,
	@username VARCHAR(255),
	@nameFirst VARCHAR(255),
	@numberTel VARCHAR(255),
	@nameMiddle VARCHAR(255),
	@addressSame INT,
	@numberMobile VARCHAR(255),
	@identificationType VARCHAR(255),
	@identificationNumber VARCHAR(255),
	@addressBillingStreet VARCHAR(255),
	@addressBillingSuburb VARCHAR(255),
	@addressBillingCountry VARCHAR(255),
	@addressPhysicalStreet VARCHAR(255),
	@addressPhysicalSuburb VARCHAR(255),
	@addressPhysicalCountry VARCHAR(255),
	@addressBillingCityTown VARCHAR(255),
	@addressPhysicalCityTown VARCHAR(255),
	@addressBillingCompanyVat VARCHAR(255),
	@addressBillingCompanyReg VARCHAR(255),
	@addressBillingAdditional VARCHAR(255),
	@addressBillingPostalCode VARCHAR(255),
	@addressPhysicalCompanyVat VARCHAR(255),
	@addressPhysicalCompanyReg VARCHAR(255),
	@addressPhysicalAdditional VARCHAR(255),
	@addressPhysicalPostalCode VARCHAR(255),
	@signature VARCHAR(MAX)
AS

SET NOCOUNT ON

BEGIN TRY
	DECLARE @id INT
	DECLARE @updated INT = 0

	SELECT TOP 1
		@id = [id]
	FROM
		[dbo].[tblUsers]
	WHERE
		[id] = @userId

	IF (@@ROWCOUNT = 0)
	BEGIN
		SELECT 'Account does not exist!' AS [message], 69 AS [code]
		RETURN 0
	END	

	UPDATE [dbo].[tblUsers] SET [picture] = @picture WHERE [id] = @userId AND @picture IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [nameLast] = @nameLast WHERE [id] = @userId AND @nameLast IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [language] = @language WHERE [id] = @userId AND @language IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [timezone] = @timezone WHERE [id] = @userId AND @timezone IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [username] = @username WHERE [id] = @userId AND @username IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [nameFirst] = @nameFirst WHERE [id] = @userId AND @nameFirst IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [numberTel] = @numberTel WHERE [id] = @userId AND @numberTel IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [nameMiddle] = @nameMiddle WHERE [id] = @userId AND @nameMiddle IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressSame] = @addressSame WHERE [id] = @userId AND @addressSame IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [numberMobile] = @numberMobile WHERE [id] = @userId AND @numberMobile IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [identificationType] = @identificationType WHERE [id] = @userId AND @identificationType IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [identificationNumber] = @identificationNumber WHERE [id] = @userId AND @identificationNumber IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressBillingStreet] = @addressBillingStreet WHERE [id] = @userId AND @addressBillingStreet IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressBillingSuburb] = @addressBillingSuburb WHERE [id] = @userId AND @addressBillingSuburb IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressBillingCountry] = @addressBillingCountry WHERE [id] = @userId AND @addressBillingCountry IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressPhysicalStreet] = @addressPhysicalStreet WHERE [id] = @userId AND @addressPhysicalStreet IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressPhysicalSuburb] = @addressPhysicalSuburb WHERE [id] = @userId AND @addressPhysicalSuburb IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressPhysicalCountry] = @addressPhysicalCountry WHERE [id] = @userId AND @addressPhysicalCountry IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressBillingCityTown] = @addressBillingCityTown WHERE [id] = @userId AND @addressBillingCityTown IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressPhysicalCityTown] = @addressPhysicalCityTown WHERE [id] = @userId AND @addressPhysicalCityTown IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressBillingCompanyVat] = @addressBillingCompanyVat WHERE [id] = @userId AND @addressBillingCompanyVat IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressBillingCompanyReg] = @addressBillingCompanyReg WHERE [id] = @userId AND @addressBillingCompanyReg IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressBillingAdditional] = @addressBillingAdditional WHERE [id] = @userId AND @addressBillingAdditional IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressBillingPostalCode] = @addressBillingPostalCode WHERE [id] = @userId AND @addressBillingPostalCode IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressPhysicalCompanyVat] = @addressPhysicalCompanyVat WHERE [id] = @userId AND @addressPhysicalCompanyVat IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressPhysicalCompanyReg] = @addressPhysicalCompanyReg WHERE [id] = @userId AND @addressPhysicalCompanyReg IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressPhysicalAdditional] = @addressPhysicalAdditional WHERE [id] = @userId AND @addressPhysicalAdditional IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	UPDATE [dbo].[tblUsers] SET [addressPhysicalPostalCode] = @addressPhysicalPostalCode WHERE [id] = @userId AND @addressPhysicalPostalCode IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT
	
	UPDATE [dbo].[tblUsers] SET [signature] = @signature WHERE [id] = @userId AND @signature IS NOT NULL
	SET @updated = @updated + @@ROWCOUNT

	SELECT @updated AS [n]
	RETURN 1
END TRY

BEGIN CATCH
	SELECT Error_Message() AS [message], 503 AS [code]
	RETURN 0
END CATCH
GO

-- SET5